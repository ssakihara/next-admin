import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'layouts/auth';
import { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default App;
