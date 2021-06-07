import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { Menu } from 'config';
import Link from 'next/link';
import React from 'react';

const App: React.FC = () => {
  return (
    <Box w='200px'>
      <Accordion allowMultiple>
        {Menu.sidebar.map((row, i) => {
          return (
            <AccordionItem key={i}>
              <AccordionButton fontSize='large'>
                {row.name}
                <AccordionIcon />
              </AccordionButton>
              {row.children.map((item, j) => {
                return <AccordionPanel key={j}>
                  <Link href={item.to}>
                    {item.name}
                  </Link>
                </AccordionPanel>;
              })}
            </AccordionItem>)
        })}
      </Accordion >
    </Box >
  );
};

export default App;

