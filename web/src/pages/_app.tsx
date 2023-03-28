

import { AppProps } from 'next/app'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp


// import "../styles/global.css";
// import '../styles/style.css';

// import type { AppProps } from 'next/app'

// function MyApp({Component,pageProps}:AppProps) {
//   return <Component {...pageProps} />

// }

// export default MyApp


// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />

  
// }
