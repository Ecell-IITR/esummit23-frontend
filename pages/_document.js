import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link rel='stylesheet' href='bower_components/aos/dist/aos.css' />
          
          <link
            rel='stylesheet'
            type='text/css'
            href='https://unpkg.com/
    fullpage.js@3.0.1/dist/fullpage.min.css'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap'
            rel='stylesheet'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap'
            rel='stylesheet'
          />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Lexend&display=swap'
            rel='stylesheet'
          />
        <meta name="google-site-verification" content="-dcU6RqZ_fb9zELH_w-yxOoUhKcqcXtYzXCDQ8sVxb4" />
        </Head>
        <body>
          <link
            rel='stylesheet'
            type='text/css'
            href='https://unpkg.com/
    fullpage.js@3.0.1/dist/fullpage.min.css'
          />
          <link rel='stylesheet' href='bower_components/aos/dist/aos.css' />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
