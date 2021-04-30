import {createGlobalStyle} from 'styled-components'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

`

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;800&display=swap"
                      rel="stylesheet"/>
            </Head>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
