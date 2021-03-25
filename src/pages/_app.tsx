import { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyles } from 'themes/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bitwise - 2021</title>
        <link rel="shortcut icon" href="/img/Logo.svg" />
        <link rel="apple-touch-icon" href="/img/Logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Novo site da bitwise technology" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
