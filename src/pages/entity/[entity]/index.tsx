import { Button, Heading, Table, Thead, Tbody, Tr, Th, Td, Container } from '@chakra-ui/react';
import axios from 'axios';
import LinkButton from 'components/app/AppLinkButton';
import getConfig from 'next/config';
import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { nowLoadingState } from 'store/app';
import { listState } from 'store/entity';

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps({ params }) {
  const endpoint = params.entity;
  return { props: { endpoint } };
}

interface FieldProps {
  field: any;
  text: string;
}

const Field: React.FC<FieldProps> = (props) => {
  let text = props.text;
  switch (props.field.type) {
    case 'select':
      return <Td>{props.field.option.items[text]}</Td>;

    case 'switch':
      text = props.text.toString();
      return <Td>{props.field.option[text]}</Td>;

    default:
      return <Td>{text}</Td>;
  }
};

interface Props {
  endpoint: string;
}

const App: React.FC<Props> = (props) => {
  const entity = publicRuntimeConfig.entity[props.endpoint];
  const setNowLoading = useSetRecoilState(nowLoadingState);

  const [data, setData] = useRecoilState(listState);

  useEffect(() => {
    setNowLoading(true);
    const fetchData = async () => {
      const response = await axios.get(`/api/entity/${props.endpoint}`);
      setData(response.data.data);
      setNowLoading(false);
    };
    fetchData();
  }, [props.endpoint]);

  const removeItem = () => {
    window.alert('Delete');
  };

  return (
    <Container>
      <Heading pb={3}>{entity.title}</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            {entity.list.map((key, i) => {
              const field = entity.fields.find((field) => field.name === key);
              return <Th key={i}>{field.label}</Th>;
            })}
            <Th>操作</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, j) => {
            return (
              <Tr key={j}>
                {entity.list.map((key) => {
                  const field = entity.fields.find((field) => field.name === key);
                  const text = item[key] ?? '';
                  return <Field key={key} field={field} text={text}></Field>;
                })}
                <Td>
                  <LinkButton
                    colorScheme={publicRuntimeConfig.app.colorScheme}
                    text="編集"
                    href={`/entity/${props.endpoint}/edit/${item.id}`}
                  />
                  <Button colorScheme="red" ml={3} onClick={removeItem} index={item.id}>
                    削除
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Container>
  );
};

export default App;
