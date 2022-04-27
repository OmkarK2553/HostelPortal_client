import '../styles/globals.css'
import '../styles/dashboard.css'
import '../styles/home.css'
import '../styles/loginPage.css'
import '../styles/signup.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div>
      <Navbar/>
       <Component {...pageProps} />
    </div>
  )
}

export default MyApp
