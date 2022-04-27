import '../styles/globals.css'
import '../styles/dashboard.css'
import '../styles/loginPage.css'
import '../styles/signup.css'
import '../styles/home.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='h-full'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Navbar />
      <Component {...pageProps} />
      <style>import 'bootstrap/dist/css/bootstrap.min.css';</style>
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
       
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        
      ></script>
    </div>
  )
}

export default MyApp
