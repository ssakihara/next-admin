import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { Site } from 'config';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import React from 'react';

const App: React.FC = () => {
  const [session] = useSession();
  return (
    <Box bg={Site.themeColor} w="100%" p={4} color="white">
      <Flex align="center">
        <Link href="/">
          {Site.title}
        </Link>
        <Spacer />
        {!session ? (
          <Button variant="unstyled" onClick={() => signIn()}>
            Sign in
          </Button>
        ) : (
          <Button variant="unstyled" onClick={() => signOut()}>
            Sign out
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default App;
