import "../styles/global.css";
import type { AppProps } from 'next/app'

function MyApp({Component,pageProps}:AppProps) {
  return <Component {...pageProps} />

}

export default MyApp


// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />

  
// }
