import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.jpg'
const Home = () => {
  return (
    <>
      <div className="header flex justify-center align-middle text-center h-full">
        <Image src={logo} id="logo"></Image>
        <h1> PUNE INSTITUTE OF COMPUTER TECHNOLOGY </h1>
        <div className="text"></div>
      </div>

      <div className="h-full">
        <div className="leftcolumn">
          <div className="card">
            <h2 className='overflow-hidden'>HOSTEL</h2>
            <h5></h5>
            <p className='overflow-hidden'>
              The hostel dates back to 1899, after the College came into
              existence in 1854. Initially, it was started as a hostel to house
              the subordinate officers of the Poona Engineering Class &
              Mechanical School, for carrying out public works like
              buildings,dams, canals, railways and bridges. Later on, the hostel
              was known as Poona Civil Engineering College Hostel
              and,subsequently in the year 1911, the name was changed to the
              College of Engineering Poona Hostel, popularly known as the COEP
              Hostel.
            </p>
          </div>
          <div className="card">
            <h2 className='overflow-hidden'>Features</h2>
            <p className='overflow-hidden'>
              The messes at Manipal Institute of Technology are run by the Chef
              on Wheels. It is one of a kind catering service that offers high
              quality & cost effective service. Our prime focus is to provide
              healthy and delicious food for everyone, anytime, anywhere. We
              believe that food served with warmth and the right attitude will
              leave a lasting impression in the minds of people being served.
              Our priority is to maintain a standard operating procedure,
              uniformly practiced across various sites with high emphasis on
              following food safety protocols and compliance with all statutory
              norms
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2 className='overflow-hidden'>MESS</h2>
            <p className='overflow-hidden'>
              The messes at Manipal Institute of Technology are run by the Chef
              on Wheels. It is one of a kind catering service that offers high
              quality & cost effective service. Our prime focus is to provide
              healthy and delicious food for everyone, anytime, anywhere. We
              believe that food served with warmth and the right attitude will
              leave a lasting impression in the minds of people being served.
              Our priority is to maintain a standard operating procedure,
              uniformly practiced across various sites with high emphasis on
              following food safety protocols and compliance with all statutory
              norms
            </p>
          </div>
          <div className="card">
            <h2 className='overflow-hidden'>News</h2>
            <p className='overflow-hidden'>
              The messes at Manipal Institute of Technology are run by the Chef
              on Wheels. It is one of a kind catering service that offers high
              quality & cost effective service. Our prime focus is to provide
              healthy and delicious food for everyone, anytime, anywhere. We
              believe that food served with warmth and the right attitude will
              leave a lasting impression in the minds of people being served.
              Our priority is to maintain a standard operating procedure,
              uniformly practiced across various sites with high emphasis on
              following food safety protocols and compliance with all statutory
              norms
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
