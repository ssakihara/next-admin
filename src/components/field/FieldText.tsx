import { Input, Text, Container } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { entityState } from 'store/entity'

interface Props {
  name: string,
  label: string;
  option: any;
}

const App: React.FC<Props> = (props) => {
  const [entity, setEntity] = useRecoilState(entityState(props.name))

  useEffect(() => {
    if (entity === undefined) {
      setEntity(props.option.default)
    }
  }, [])

  return (
    <Container p={3}>
      <Text mb={3}>{props.label}</Text>
      <Input value={entity ?? ''} onChange={e => setEntity(e.target.value)}></Input>
    </Container>
  );
};

export default App;
