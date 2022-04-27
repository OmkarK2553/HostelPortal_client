import React from 'react'

const Login = () => {
    return (
        <>
            <div class="container loginContainer">
                <form action="/login" method="POST">
                    <h2 class="text-center title">Login Here</h2>

                    <input type="text" placeholder="Username" name="email" class="inputFields" id="username" required />
                    <input type="password" placeholder="Password" name="password" class="inputFields" id="password"
                        required />

                    <div class="fields text-center">
                        <input type="checkbox" />
                        <span class="rememberMe">Remember me</span>
                        <a href="#" class="text-align-right forgotPwd" onclick="forgetClick()">Forgot Password?</a>
                    </div>

                    <button class="btn btn-primary align-items-center text-center" id="loginBtn"
                        type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login