import { Head, Html, Main, NextScript } from 'next/document'

if (typeof window !== 'undefined') {
  require('jquery')
  require('popper.js')
  require('bootstrap')
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            mermaid.initialize({startOnLoad: true, theme: 'forest'});
            window.mermaid = mermaid;
            `,
          }}
        />

        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="a90554e7-9b2c-4115-90fc-47259bc9bd82"
        ></script>

        <script src="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js"></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/night-owl.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="images/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="images/favicon/safari-pinned-tab.svg"
          color="#ffffff"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
