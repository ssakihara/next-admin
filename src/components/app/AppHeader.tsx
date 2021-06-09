import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import getConfig from 'next/config';
import Link from 'next/link';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

const App: React.FC = () => {
  const login = () => {
    //
  };

  return (
    <Box bg={publicRuntimeConfig.app.themeColor} w="100%" p={4} color="white">
      <Flex align="center">
        <Link href="/">{publicRuntimeConfig.app.title}</Link>
        <Spacer />
        <Button variant="unstyled" onClick={() => login()}>
          Login
        </Button>
      </Flex>
    </Box>
  );
};

export default App;
