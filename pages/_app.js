import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  <Script
      id="scriptBeforeInteractive"
      src="../res/js/home.js"
    />
  return <Component {...pageProps} />
}

export default MyApp
