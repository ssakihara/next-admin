import { Heading, Input, Container } from '@chakra-ui/react';
import React from 'react';
import DatePicker from 'react-datepicker';
import { useRecoilState } from 'recoil';
import { entityState } from 'store/entity';
import 'react-datepicker/dist/react-datepicker.css';

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
      <DatePicker
        selected={value}
        onChange={(date) => setValue(date)}
        timeInputLabel="Time:"
        dateFormat="yyyy/MM/dd H:mm"
        showTimeInput
        customInput={<Input />}
      />
    </Container>
  );
};

export default App;
