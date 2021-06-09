import { Select, Heading, Container } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { entityState } from 'store/entity';

interface Props {
  name: string;
  label: string;
  option: {
    default: string;
    items: [];
  };
}

const App: React.FC<Props> = (props) => {
  const [value, setValue] = useRecoilState(entityState(props.name));

  return (
    <Container p={3}>
      <Heading size="sm" mb={3}>
        {props.label}
      </Heading>
      <Select value={value} onChange={(e) => setValue(e.target.value)}>
        {Object.keys(props.option.items).map((k, i) => {
          return (
            <option value={k} key={i}>
              {props.option.items[k]}
            </option>
          );
        })}
      </Select>
    </Container>
  );
};

export default App;
