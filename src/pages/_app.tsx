import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'layouts/default';
import { Provider as AuthProvider } from 'next-auth/client';
import { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <AuthProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default App;
