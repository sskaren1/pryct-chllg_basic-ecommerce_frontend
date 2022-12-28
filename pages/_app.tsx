import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from './../config/apollo';
// import { ProductProvider } from './../context/ProductContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      {/* <ProductProvider > */}
        <Component {...pageProps} />
      {/* </ProductProvider> */}
    </ApolloProvider>
  )
}
