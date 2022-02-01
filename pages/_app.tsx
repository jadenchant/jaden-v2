import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/scss/index.scss'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App