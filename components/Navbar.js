import React from 'react'
// import { NavLink } from "react-router-dom"
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              PICT Hostel
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              classeName="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-lg-0 ms-auto ml-auto mb-2">
                <li className="nav-item">
                  <Link href="/">
                    <span className="nav-link active" aria-current="page">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/features">
                    <span className="nav-link active" aria-current="page">
                      Features
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <span className="nav-link active" aria-current="page">
                      Contact us
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/signup">
                    <span className="nav-link active" aria-current="page">
                      Sign Up
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/login">
                    <span className="nav-link active" aria-current="page">
                      Login
                    </span>
                  </Link>
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
