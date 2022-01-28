/* eslint-disable jsx-a11y/html-has-lang */
/*
        <link
          rel="preload"
          href="/assets/fonts/oswald-v36-latin_cyrillic-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
*/
const HTML = (props) => {
  const {
    htmlAttributes,
    headComponents,
    bodyAttributes,
    preBodyComponents,
    body,
    postBodyComponents,
  } = props;
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link
          rel="preload"
          href="/assets/fonts/oswald-v36-latin_cyrillic-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/aclonica-v11-latin-regular-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {headComponents}
      </head>

      <body {...bodyAttributes}>
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
