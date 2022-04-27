import '../styles/globals.css'
import '../styles/dashboard.css'
import '../styles/home.css'
import '../styles/loginPage.css'
import '../styles/signup.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <style>
      import 'bootstrap/dist/css/bootstrap.min.css';
      </style>
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
    </div>
  )
}

export default MyApp
