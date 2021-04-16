import { Box, Button } from '@chakra-ui/react';
import { Menu } from 'config';
import Link from 'next/link';
import React from 'react';

interface Props {
  w: number;
}

const App: React.FC<Props> = (props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      position="fixed"
      top={0}
      left={0}
      pt={12}
      w={`${props.w}px`}
      h="100%"
    >
      {Menu.sidebar.map((item, index) => {
        return (
          <Link href={item.to} key={index}>
            <Button w="100%" bg="white">
              {item.name}
            </Button>
          </Link>
        );
      })}
    </Box>
  );
};

export default App;
