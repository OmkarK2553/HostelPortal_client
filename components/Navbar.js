import React from 'react'
// import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">PICT Hostel</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div classeName="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ms-auto">
                                <li className="nav-item">
                                    {/* <NavLink className="nav-link active" aria-current="page" href="/">Home</NavLink> */}
                                </li>
                                <li className="nav-item">
                                    {/* <NavLink className="nav-link" href="/features">Features</NavLink> */}
                                </li>
                                <li className="nav-item">
                                    {/* <NavLink className="nav-link" href="/contact">Contact us</NavLink> */}
                                </li>

                                <li className="nav-item">
                                    {/* <NavLink className="nav-link" href="/signup">Sign Up</NavLink> */}
                                </li>
                                <li className="nav-item">
                                    {/* <NavLink className="nav-link" href="/login">Login</NavLink> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar