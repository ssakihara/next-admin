import { Select, Text, Container } from '@chakra-ui/react';
import React from 'react';

interface Props {
  name: string,
  label: string;
  option: {
    default: string;
    items: [];
  };
}
const App: React.FC<Props> = (props) => {
  return (
    <Container p={3}>
      <Text mb={3}>{props.label}</Text>
      <Select>
        {Object.keys(props.option.items).map((name, key) => {
          return (
            <option value={key} key={key}>
              {name}
            </option>
          );
        })}
      </Select>
    </Container>
  );
};

export default App;
