import { Box, Container, Flex } from '@chakra-ui/layout';
import Header from 'components/app/AppHeader';
import NowLoaing from 'components/app/AppNowLoaing';
import Sidebar from 'components/app/AppSidebar';
import React from 'react';

const App: React.FC = (props) => {
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
