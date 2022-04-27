import React from 'react'

const Login = () => {
  return (
    <>
      <div className="loginContainer mx-auto p-4 overflow-hidden ">
        <form action="/login" method="POST">
          <h2 className="title text-center overflow-hidden">Login Here</h2>

          <input
            type="text"
            placeholder="Username"
            name="email"
            className="inputFields"
            id="username"
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

          <div className="fields text-center">
            <input type="checkbox" />
            <span className="rememberMe">Remember me</span>
            <a
              href="#"
              className="text-align-right forgotPwd"
              onclick="forgetClick()"
            >
              Forgot Password?
            </a>
          </div>

          <button
            className="btn btn-primary align-items-center text-center"
            id="loginBtn"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
