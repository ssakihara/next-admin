import { Heading, Container } from '@chakra-ui/react';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/dist/markdown-editor.css'
import '@uiw/react-markdown-preview/dist/markdown.css';
import React from 'react';
import { useRecoilState } from 'recoil';
import { entityState } from 'store/entity'

interface Props {
  name: string,
  label: string;
  option: {
    default: string;
    items: [];
  };
}

const App: React.FC<Props> = (props) => {
  const [value, setValue] = useRecoilState(entityState(props.name))
  return (
    <Container p={3}>
      <Heading size="sm" mb={3}>{props.label}</Heading>
      <MDEditor value={value} onChange={setValue} />
    </Container>
  );
};

export default App;
