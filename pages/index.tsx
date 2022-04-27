import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import HomeSection from '../components/Home'
const Home: NextPage = () => {
  return (
    <div >
      <Navbar></Navbar>
      <HomeSection/>
    </div>
  )
}

export default Home
