import { Select, Text, Container } from '@chakra-ui/react';
import React, { useEffect } from 'react';
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
  const [entity, setEntity] = useRecoilState(entityState(props.name))

  useEffect(() => {
    if (entity === undefined) {
      setEntity(props.option.default)
    }
  }, [])


  return (
    <Container p={3}>
      <Text mb={3}>{props.label}</Text>
      <Select value={entity} onChange={(e) => setEntity(e.target.value)}>
        {Object.keys(props.option.items).map((key, i) => {
          return (
            <option value={key} key={i}>
              {props.option.items[key]}
            </option>
          );
        })}
      </Select>
    </Container>
  );
};

export default App;
