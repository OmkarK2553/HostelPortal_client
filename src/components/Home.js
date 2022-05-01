import React from 'react'
import '../css/home.css'
import '../css/footer.css'
import imgpath from '../img/logo.jpg'
import hostelimg from '../img/hostelimg.jpeg'
import mess from '../img/mess.jpg'

const Home = () => {
    return (
        <>
            <div className="header d-flex ">
                <img src={imgpath} id="logo" /><h1 id='clgtitle'>   PUNE INSTITUTE OF COMPUTER TECHNOLOGY   </h1>
                <div className="text">
                </div>
            </div>

            <div className="row">
                <div className="leftcolumn">
                    <div className="card">
                        <h2>HOSTEL</h2>
                        <h5></h5>
                        {/* <p>
                            The hostel dates back to 1899, after the College came into existence in 1854. Initially, it was started as a hostel to house the subordinate officers of the Poona Engineering className & Mechanical School, for carrying out public works like buildings,dams, canals, railways and bridges. Later on, the hostel was known as Poona Civil Engineering College Hostel and,subsequently in the year 1911, the name was changed to the College of Engineering Poona Hostel, popularly known as the COEP Hostel.
                        </p> */}
                        <img src={hostelimg} alt="PICT Hostel" />
                    </div>
                    <div className="card">
                        <h2>Features</h2>
                        <p>The messes at Manipal Institute of Technology are run by the Chef on Wheels. It is one of a kind catering service that offers high quality & cost effective service. Our prime focus is to provide healthy and delicious food for everyone, anytime, anywhere. We believe that food served with warmth and the right attitude will leave a lasting impression in the minds of people being served. Our priority is to maintain a standard operating procedure, uniformly practiced across various sites with high emphasis on following food safety protocols and compliance with all statutory norms</p>
                    </div>
                </div>
                <div className="rightcolumn">
                    <div className="card">
                        <h2>MESS</h2>
                        {/* <p>The messes at Manipal Institute of Technology are run by the Chef on Wheels. It is one of a kind catering service that offers high quality & cost effective service. Our prime focus is to provide healthy and delicious food for everyone, anytime, anywhere. We believe that food served with warmth and the right attitude will leave a lasting impression in the minds of people being served. Our priority is to maintain a standard operating procedure, uniformly practiced across various sites with high emphasis on following food safety protocols and compliance with all statutory norms</p> */}
                        <img src={mess} alt="" />
                    </div>
                    <div className="card">
                        <h2>News</h2>
                        <p>The messes at Manipal Institute of Technology are run by the Chef on Wheels. It is one of a kind catering service that offers high quality & cost effective service. Our prime focus is to provide healthy and delicious food for everyone, anytime, anywhere. We believe that food served with warmth and the right attitude will leave a lasting impression in the minds of people being served. Our priority is to maintain a standard operating procedure, uniformly practiced across various sites with high emphasis on following food safety protocols and compliance with all statutory norms</p>

                    </div>
                </div>
            </div>

            <div className="footer-basic">
                <footer>
                    <div className="social"><a href="#"><i className="icon ion-social-google"></i></a><a href="#"><i
                        className="icon ion-social-instagram"></i></a><a href="#"><i
                            className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a>
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Home</a></li>
                        <li className="list-inline-item"><a href="#">Services</a></li>
                        <li className="list-inline-item"><a href="#">About</a></li>
                        <li className="list-inline-item"><a href="#">Terms</a></li>
                        <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <p className="copyright">PICT Hostel © 2022</p>
                </footer>
            </div>
        </>
    )
}

export default Home