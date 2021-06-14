import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'layouts/auth';
import { AppProps } from 'next/app';
import { initAuth } from 'plugins/firebase'; // the module you created above
import React from 'react';
import { RecoilRoot } from 'recoil';

initAuth();

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
