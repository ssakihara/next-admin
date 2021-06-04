import { Switch, FormControl, FormLabel, Container, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { entityState } from 'store/entity'

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
  const [value, setValue] = useRecoilState(entityState(props.name))

  const toggle = () => {
    setValue(!value)
  }
  const label = value ? props.option.true : props.option.false
  return (
    <Container p={3}>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor={props.name} mb="0">
          {props.label}
        </FormLabel>
        <Switch isChecked={value} id={props.name} onChange={toggle} mr={3} />
        <Text>{label}</Text>
      </FormControl>
    </Container>
  );
};

export default App;
