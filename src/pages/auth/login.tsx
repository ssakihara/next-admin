import { Button, Container, Flex, Heading, Input } from '@chakra-ui/react';
import firebase from 'firebase/app';
import getConfig from 'next/config';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

const App: React.FC = () => {
  const login = async () => {
    const user = await firebase.auth().signInWithEmailAndPassword('', '').catch();
    console.log(user);
  };

  return (
    <Container>
      <Flex height="100vh" justify="center" direction="column">
        <Flex height="300px" justify="space-evenly" direction="column">
          <Heading>Welcome to {publicRuntimeConfig.app.title}</Heading>
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Flex justify="flex-end">
            <Button colorScheme={publicRuntimeConfig.app.colorScheme} onClick={login}>
              ログイン
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default App;
