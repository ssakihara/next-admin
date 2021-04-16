import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'layouts/default';
import { AppProps } from 'next/app';
import React from 'react';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
