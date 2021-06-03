import { Input, Text, Container } from '@chakra-ui/react';
import React from 'react';

interface Props {
  name: string,
  label: string;
  option: any;
}
const App: React.FC<Props> = (props) => {
  return (
    <Container p={3}>
      <Text mb={3}>{props.label}</Text>
      <Input></Input>
    </Container>
  );
};

export default App;
