import { ColorModeScript } from '@chakra-ui/core';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;500;700&display=swap"
            rel="preload"
            as="style"
            crossOrigin=""
          /> */}
        </Head>
        <body>
          <ColorModeScript initialColorMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}