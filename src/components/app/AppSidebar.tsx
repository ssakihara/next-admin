import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import getConfig from 'next/config';
import Link from 'next/link';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

const App: React.FC = () => {
  return (
    <Box w="200px">
      <Accordion allowMultiple>
        {publicRuntimeConfig.menu.sidebar.map((row, i) => {
          return (
            <AccordionItem key={i}>
              <AccordionButton fontSize="large">
                {row.name}
                <AccordionIcon />
              </AccordionButton>
              {row.children.map((item, j) => {
                return (
                  <AccordionPanel key={j}>
                    <Link href={item.to}>{item.name}</Link>
                  </AccordionPanel>
                );
              })}
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default App;
