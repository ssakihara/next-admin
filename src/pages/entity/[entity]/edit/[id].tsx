import fs from 'fs';
import { Button, Container } from '@chakra-ui/react';
import Select from 'components/field/FieldSelect';
import Switch from 'components/field/FieldSwitch';
import Text from 'components/field/FieldText';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { entityState } from 'store/entity'

export async function getServerSideProps({ params }) {
  const entity = JSON.parse(fs.readFileSync(`${process.cwd()}/config/entity/${params.entity}.json`, 'utf8'));
  return { props: { entity } };
}

interface Props {
  entity: any;
}

const Fields: React.FC<Props> = (props) => {
  return props.entity.fields.map((field, i) => {
    switch (field.type) {
      case 'text':
        return <Text key={i} name={field.name} label={field.label} option={field.option}></Text>;

      case 'select':
        return <Select key={i} name={field.name} label={field.label} option={field.option}></Select>;

      case 'switch':
        return <Switch key={i} name={field.name} label={field.label} option={field.option}></Switch>;

      default:
        return <>Field is not found</>;
    }
  });
};

const App: React.FC<Props> = (props) => {
  let entity = {}
  props.entity.fields.map(field => {
    const v = useRecoilValue(entityState(field.name));
    entity = Object.assign(entity, { [field.name]: v })
    return null
  })

  const save = () => {
    console.log(entity);
  }

  return (
    <Container mt={3}>
      <Fields entity={props.entity}></Fields>
      <Container p={3}>
        <Button colorScheme="blue" onClick={save}>保存</Button>
      </Container>
    </Container>
  );
};

export default App;
