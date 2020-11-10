import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            rel='preload'
            href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap'
            as='style'
            onload="this.onload=null;this.rel='stylesheet'"
          />
          <noscript>
            <link
              rel='stylesheet'
              href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap'
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
