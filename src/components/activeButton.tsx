import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  href: string;
  text: string;
}

const App: React.FC<Props> = (props) => {
  const router = useRouter();
  return (
    <Link href={props.href}>
      <Button
        w="100%"
        _active={{ background: 'green.100' }}
        bg="white"
        color="gray.700"
        size="md"
        isActive={router.asPath === props.href}
      >
        {props.text}
      </Button>
    </Link>
  );
};

export default App;
