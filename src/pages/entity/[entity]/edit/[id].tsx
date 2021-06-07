import fs from 'fs';
import { Heading, Button, Container } from '@chakra-ui/react';
import axios from 'axios'
import Editor from 'components/field/FieldEditor';
import Select from 'components/field/FieldSelect';
import Switch from 'components/field/FieldSwitch';
import Text from 'components/field/FieldText';
import { Site } from 'config';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { entityState } from 'store/entity'

export async function getServerSideProps({ params }) {
  const id = params.id
  const endpoint = params.entity
  const entity = JSON.parse(fs.readFileSync(`${process.cwd()}/config/entity/${params.entity}.json`, 'utf8'));
  return { props: { endpoint, entity, id } };
}


interface FieldProps {
  fields: any;
}

const Fields: React.FC<FieldProps> = (props) => {
  return props.fields.map((field, i) => {
    switch (field.type) {
      case 'text':
        return <Text key={i} name={field.name} label={field.label} option={field.option}></Text>;

      case 'select':
        return <Select key={i} name={field.name} label={field.label} option={field.option}></Select>;

      case 'switch':
        return <Switch key={i} name={field.name} label={field.label} option={field.option}></Switch>;

      case 'editor':
        return <Editor key={i} name={field.name} label={field.label} option={field.option}></Editor>;

      default:
        return <>Field is not found</>;
    }
  });
};

interface Props {
  id: string,
  endpoint: string,
  entity: any;
}

const App: React.FC<Props> = (props) => {
  // Stateの初期化
  let entity = {};
  let setters = {};
  props.entity.fields.map(field => {
    const [value, setValue] = useRecoilState(entityState(field.name));
    entity = Object.assign(entity, { [field.name]: value })
    setters = Object.assign(setters, { [field.name]: setValue })
    return null
  })

  let response
  useEffect(() => {
    const fetchData = async () => {
      response = await axios.get(`/api/entity/${props.endpoint}/${props.id}`)
      props.entity.fields.map(field => {
        setters[field.name](response.data.data[field.name] ?? field.option.default)
        return null
      })
    }

    fetchData()
  }, [props.id])

  const save = () => {
    console.log(entity);
  }

  return (
    <Container mt={3}>
      <Heading py={3}>{props.entity.title}</Heading>
      <Fields fields={props.entity.fields}></Fields>
      <Container p={3}>
        <Button colorScheme={Site.colorScheme} onClick={save}>保存</Button>
      </Container>
    </Container>
  );
};

export default App;
