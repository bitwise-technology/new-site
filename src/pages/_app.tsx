import { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyles } from 'themes/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bitwise - Technology</title>
        <link rel="shortcut icon" href="/img/Logo.svg" />
        <link rel="apple-touch-icon" href="/img/Logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Design, desenvolvimento ágil, inovação e liberdade. Nosso desafio é transformar ideias em resultados reais."
        />
        <meta
          name="keywods"
          content="blockchain, desenvolvimento, consultoria, trabalho remoto, fintech"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://bitwise.ltda/" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-143190317-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'UA-143190317-1');
            `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "43dg9fqdo1");
            `
          }}
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
