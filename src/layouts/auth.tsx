import { Container, Box, Flex } from '@chakra-ui/layout';
import AccessDenied from 'components/app/AppAccessDenied';
import Header from 'components/app/AppHeader';
import NowLoaing from 'components/app/AppNowLoaing';
import Sidebar from 'components/app/AppSidebar';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

const App: React.FC = (props) => {
  const t = true;
  const router = useRouter();

  if (publicRuntimeConfig.app.publicPages.includes(router.pathname)) {
    return (
      <Box>
        <Header></Header>
        {props.children}
      </Box>
    );
  }

  if (t) {
    return (
      <Box>
        <Header></Header>
        <AccessDenied></AccessDenied>
      </Box>
    );
  }

  return (
    <Box>
      <NowLoaing></NowLoaing>
      <Header></Header>
      <Container maxWidth="100%" mt={10}>
        <Flex>
          <Sidebar></Sidebar>
          {props.children}
        </Flex>
      </Container>
    </Box>
  );
};

export default App;
