import Document, { Html, Head, Main, NextScript } from "next/document";

export default class myDocument extends Document {
  render() {
    return (
      <Html lang="eng">
        <Head>
          <meta name="description" content="A site for programming portfolio" />
          <meta charset="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossorigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
