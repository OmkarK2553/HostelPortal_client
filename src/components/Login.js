import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import '../css/loginPage.css'

const Login = () => {

    const naviagte = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })

        const data = res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials!")
        }
        else {
            window.alert("Login Successful!")
            Navigate('/')
        }
    }
    return (
        <>
            <div className="loginContainer">
                <form method="POST">
                    <h2 className="text-center title">Login Here</h2>

                    <input type="text" placeholder="Username" name="email" className="inputFields" id="username" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" name="password" className="inputFields" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        required />

                    <div className="fields text-center">
                        <input type="checkbox" />
                        <span className="rememberMe">Remember me</span>
                        <a href="#" className="text-align-right forgotPwd" onclick="forgetClick()">Forgot Password?</a>
                    </div>

                    <div className='container'>
                        <button className="btn align-items-center text-center" id="btn"
                            type="submit" onclick={loginUser}><p id="btnText">Login</p>
                            <div className="check-box">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                </svg>
                            </div></button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Login