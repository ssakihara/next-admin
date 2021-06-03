import { Switch, FormControl, FormLabel, Container, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  name: string,
  label: string;
  option: {
    default: boolean,
    true: string
    false: string
  };
}

const App: React.FC<Props> = (props) => {
  const [isChecked, setIsChecked] = React.useState(props.option.default);
  const toggle = () => {
    setIsChecked(!isChecked)
  }
  const label = isChecked ? props.option.true : props.option.false
  return (
    <Container p={3}>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor={props.name} mb="0">
          {props.label}
        </FormLabel>
        <Switch id={props.name} onChange={toggle} mr={3} />
        <Text>{label}</Text>
      </FormControl>
    </Container>
  );
};

export default App;
