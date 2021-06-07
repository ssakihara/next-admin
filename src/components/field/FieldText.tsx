import { Input, Heading, Container } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { entityState } from 'store/entity'

interface Props {
  name: string,
  label: string;
  option: any;
}

const App: React.FC<Props> = (props) => {
  const [value, setValue] = useRecoilState(entityState(props.name))

  return (
    <Container p={3}>
      <Heading size="sm" mb={3}>{props.label}</Heading>
      <Input value={value ?? ''} onChange={e => setValue(e.target.value)}></Input>
    </Container>
  );
};

export default App;
