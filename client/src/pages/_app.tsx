import { ChakraProvider } from '@chakra-ui/core'
import theme from '../theme'
import { Scrollbar } from 'react-scrollbars-custom'

import '../styles/globals.scss'
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';


function MyApp({ Component, pageProps, cookies }: any) {

  return (
    // <ThemeProvider theme={theme}>
    //   <ColorModeProvider>
    //     <CSSReset />
      <ChakraProvider theme={theme}>
        <Scrollbar style={{ width: "100vw", height: "100vh"}} momentum={true} removeTracksWhenNotUsed={true}>
            <Component {...pageProps} />
            {/* <style jsx global>{`
                  html,
                  body {
                    font-family: 'M PLUS Rounded 1c', sans-serif;
                    font-weight: 300;
                    font-style: normal;
                    font-display: swap;
                  }
                `}
              </style> */}
        </Scrollbar>
      </ChakraProvider>
    //   </ColorModeProvider>
    // </ThemeProvider>
  )
}

export default MyApp

