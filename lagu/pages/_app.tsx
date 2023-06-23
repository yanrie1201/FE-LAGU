import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {' '}
      <ToastContainer position="top-center" />
      <Component {...pageProps} />{' '}
    </>
  )
}

export default MyApp
