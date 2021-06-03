import fs from 'fs';
import path from 'path';
import { Container } from '@chakra-ui/react';
import Select from 'components/field/FieldSelect';
import Switch from 'components/field/FieldSwitch';
import Text from 'components/field/FieldText';
import globby from 'globby';
import React from 'react';

export async function getStaticPaths() {
  const files = await globby(`${process.cwd()}/config/entity/*.json`);
  const paths = files.map((file) => {
    return `/entity/${path.basename(file, '.json')}`;
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
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
  return (
    <>
      <Container mt={3}>
        <Fields entity={props.entity}></Fields>
      </Container>
    </>
  );
};

export default App;
