import Head from 'next/head'
import { Container } from 'react-bootstrap'
import StoreFooter from '../components/StoreFooter'
import StoreNavBar from '../components/StoreNavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Game Store</title>
        <meta name="description" content="Game Store em React" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <StoreNavBar/>
    <Component {...pageProps} />
    <StoreFooter/>    
    </>
  )
}

export default MyApp
