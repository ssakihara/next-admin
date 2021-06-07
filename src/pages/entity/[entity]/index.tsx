import fs from 'fs';
import {
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container
} from "@chakra-ui/react"
import axios from 'axios'
import LinkButton from 'components/app/AppLinkButton'
import { Site } from 'config';
import React, { useEffect } from 'react';

export async function getServerSideProps({ params }) {
  const endpoint = params.entity
  const entity = JSON.parse(fs.readFileSync(`${process.cwd()}/config/entity/${params.entity}.json`, 'utf8'));
  return { props: { endpoint, entity } };
}

interface FieldProps {
  field: any
  text: string
}

const Field: React.FC<FieldProps> = (props) => {
  let text = props.text
  switch (props.field.type) {
    case 'select':
      return <Td>{props.field.option.items[text]}</Td>

    case 'switch':
      text = props.text.toString()
      return <Td>{props.field.option[text]}</Td>

    default:
      return <Td>{text}</Td>
  }
};

interface Props {
  endpoint: string,
  entity: any
}

const App: React.FC<Props> = (props) => {

  const [data, setData] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/entity/${props.endpoint}`)
      setData(response.data.data)
    }
    fetchData()
  }, [props.endpoint])

  const removeItem = () => {
    window.alert('Delete')
  }

  return <Container>
    <Heading pb={3}>{props.entity.title}</Heading>
    <Table variant="simple">
      <Thead>
        <Tr>
          {props.entity.list.map((key, i) => {
            const field = props.entity.fields.find(field => field.name === key)
            return <Th key={i}>{field.label}</Th>
          })}
          <Th>操作</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, j) => {
          return (
            <Tr key={j}>
              {props.entity.list.map(key => {
                const field = props.entity.fields.find(field => field.name === key)
                const text = item[key] ?? ''
                return (<Field key={key} field={field} text={text}></Field>)
              })}
              <Td>
                <LinkButton colorScheme={Site.colorScheme} text='編集' href={`/entity/${props.endpoint}/edit/${item.id}`}></LinkButton>
                <Button colorScheme='red' ml={3} onClick={removeItem} index={item.id}>削除</Button>
              </Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  </Container>;
};

export default App;
