import { Box } from '@chakra-ui/layout';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { useSession } from 'next-auth/client';
import React, { useEffect } from 'react';

const App: React.FC = (props) => {
  const [session, loading] = useSession();

  useEffect(() => {
    //
  }, [session]);

  if (typeof window !== 'undefined' && loading) return null

  const w = 200;

  if (!session) {
    return <>
      <Sidebar w={w}></Sidebar>
      <Box ml={w}>
        <Header></Header>
        AccessDenied
      </Box>
    </>
  }

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
