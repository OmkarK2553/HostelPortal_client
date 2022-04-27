import React from 'react'

const Signup = () => {
  return (
    <>
      <div className=" signupContainer">
        <form action="/register" method="POST">
          <h2 className="title text-center">Register Here</h2>

          <input
            type="text"
            placeholder="Fullname"
            name="fullname"
            className="inputFields"
            id="fullname"
          />
          <input
            type="email"
            placeholder="Email id"
            name="email"
            className="inputFields"
            id="email"
            required
          />

          <input
            type="text"
            placeholder="Registration ID"
            name="userid"
            className="inputFields"
            id="userid"
            required
          />
          <div className="gender d-flex">
            <div className="form-check male">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
              />
              <label className="form-check-label" for="male">
                Male
              </label>
            </div>
            <div className="form-check female">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
              />
              <label className="form-check-label" for="female">
                Female
              </label>
            </div>
          </div>
          <input
            type="number"
            placeholder="Mobile Number"
            name="mobile"
            className="inputFields"
            id="mobile_no"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="inputFields"
            id="password"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className="inputFields"
            id="password"
            required
          />

          <button
            type="submit"
            className="btn btn-primary align-items-center text-center"
            id="signupBtn"
          >
            Register
          </button>
        </form>
      </div>
    </>
  )
}

export default Signup
