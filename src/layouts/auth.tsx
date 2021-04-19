import { Box } from '@chakra-ui/layout';
import AccessDenied from 'components/app/AppAccessDenied';
import Header from 'components/app/AppHeader';
import Sidebar from 'components/app/AppSidebar';
import { Site } from 'config';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import React from 'react';

const App: React.FC = (props) => {
  const [session] = useSession();
  const router = useRouter();
  const w = 200;

  if (Site.publicPages.includes(router.pathname)) {
    return (
      <>
        <Header></Header>
      </>
    );
  }

  if (!session) {
    return (
      <>
        <Header></Header>
        <AccessDenied></AccessDenied>
      </>
    );
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
