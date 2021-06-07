import fs from 'fs';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container
} from "@chakra-ui/react"
import axios from 'axios'
import React, { useEffect } from 'react';

export async function getServerSideProps({ params }) {
  const endpoint = params.entity
  const entity = JSON.parse(fs.readFileSync(`${process.cwd()}/config/entity/${params.entity}.json`, 'utf8'));
  return { props: { endpoint, entity } };
}

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
  }, [])
  return <Container>
    <Table variant="simple">
      <Thead>
        <Tr>
          {props.entity.list.map((key, i) => {
            const field = props.entity.fields.find(field => field.name === key)
            return <Th key={i}>{field.name}</Th>
          })}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, j) => {
          return (
            <Tr key={j}>
              {props.entity.list.map(key => {
                const result = item[key] ?? ''
                return (<Td key={key}>{result.toString()}</Td>)
              })}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  </Container>;
};

export default App;
