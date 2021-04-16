import { ChakraProvider } from '@chakra-ui/react';
import Layout from 'layouts/auth';
import { Provider as AuthProvider } from 'next-auth/client';
import { AppProps } from 'next/app';
import React from 'react';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <AuthProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
