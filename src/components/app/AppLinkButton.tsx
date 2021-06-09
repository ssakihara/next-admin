import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  text: string;
  colorScheme: string;
}

const App: React.FC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <Button colorScheme={props.colorScheme}>{props.text}</Button>
    </Link>
  );
};

export default App;
