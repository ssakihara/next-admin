import { Box } from '@chakra-ui/layout';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
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
