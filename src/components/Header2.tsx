import { Box } from '@chakra-ui/react';
import { Site } from 'config';
import Link from 'next/link';
import React from 'react';

const App: React.FC = () => {
  return (
    <Box bg={Site.themeColor} w="100%" p={4} color="white">
      <Link href="/">{Site.title}</Link>
    </Box>
  );
};

export default App;
