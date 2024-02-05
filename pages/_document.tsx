import { Head, Html, Main, NextScript } from 'next/document'

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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
