import { Box, Flex, Spacer } from '@chakra-ui/react';
import getConfig from 'next/config';
import Link from 'next/link';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

const App: React.FC = () => {
  return (
    <Box bg={publicRuntimeConfig.app.themeColor} w="100%" p={4} color="white">
      <Flex align="center">
        <Link href="/">{publicRuntimeConfig.app.title}</Link>
        <Spacer />
        <Link href="/auth/login">ログイン</Link>
      </Flex>
    </Box>
  );
};

export default App;
