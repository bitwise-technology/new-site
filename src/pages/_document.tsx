/* eslint-disable react/no-unknown-property */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta
            name="adopt-website-id"
            content="05211a6a-4493-4521-9d04-7fceb7202a0b"
          />
          <script
            src="//tag.goadopt.io/injector.js?website_code=05211a6a-4493-4521-9d04-7fceb7202a0b"
            className="adopt-injector"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            async
            src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/ebf24d52-97b5-4728-90e3-f11688ec6077-loader.js
"
          ></script>
        </body>
      </Html>
    )
  }
}
