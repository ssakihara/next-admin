import { Switch, FormControl, FormLabel, Container, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
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
  const [entity, setEntity] = useRecoilState(entityState(props.name))

  useEffect(() => {
    if (entity === undefined) {
      setEntity(props.option.default)
    }
  }, [])

  const toggle = () => {
    setEntity(!entity)
  }
  const label = entity ? props.option.true : props.option.false
  return (
    <Container p={3}>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor={props.name} mb="0">
          {props.label}
        </FormLabel>
        <Switch isChecked={entity} id={props.name} onChange={toggle} mr={3} />
        <Text>{label}</Text>
      </FormControl>
    </Container>
  );
};

export default App;
