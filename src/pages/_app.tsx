import GlobalStyle from '../../styles/global'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import { FormContextProvider } from '../contexts/formContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Form multi step</title>
      </Head>
      <GlobalStyle />
      <FormContextProvider>
        <Component {...pageProps} />
      </FormContextProvider>
    </>
  )
}
export default MyApp
