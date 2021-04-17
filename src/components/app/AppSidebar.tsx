import { Box, Text, Stack } from '@chakra-ui/react';
import ActiveButton from 'components/app/AppActiveButton';
import { Menu } from 'config';
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
      <Stack spacing={4}>
        {Menu.sidebar.map((row, i) => {
          return (
            <div key={i}>
              <Text w="100%" bg="white" fontSize="xl" color="gray.700" variant="unstyled" textAlign="center">
                {row.name}
              </Text>
              {row.children.map((item, j) => {
                return <ActiveButton href={item.to} text={item.name} key={j} />;
              })}
            </div>
          );
        })}
      </Stack>
    </Box>
  );
};

export default App;
