import { Box } from '@chakra-ui/layout';
import Header from 'components/app/AppHeader';
import Sidebar from 'components/app/AppSidebar';
import React from 'react';

const App: React.FC = (props) => {
  const w = 200;
  return (
    <>
      <Sidebar w={w}></Sidebar>
      <Box ml={w}>
        <Header></Header>
        {props.children}
      </Box>
    </>
  );
};

export default App;
