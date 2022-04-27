import React from 'react'

const Signup = () => {
    return (
        <>
            <div class=" signupContainer">
                <form action="/register" method="POST">
                    <h2 class="text-center title">Register Here</h2>

                    <input type="text" placeholder="Fullname" name="fullname" class="inputFields" id="fullname" />
                    <input type="email" placeholder="Email id" name="email" class="inputFields" id="email" required />

                    <input type="text" placeholder="Registration ID" name="userid" class="inputFields" id="userid" required />
                    <div class="gender d-flex">
                        <div class="form-check male">
                            <input class="form-check-input" type="radio" name="gender" id="male" />
                            <label class="form-check-label" for="male">
                                Male
                            </label>
                        </div>
                        <div class="form-check female">
                            <input class="form-check-input" type="radio" name="gender" id="female" />
                            <label class="form-check-label" for="female">
                                Female
                            </label>
                        </div>
                    </div>
                    <input type="number" placeholder="Mobile Number" name="mobile" class="inputFields" id="mobile_no"
                        required />
                    <input type="password" placeholder="Password" name="password" class="inputFields" id="password"
                        required />
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" class="inputFields"
                        id="password" required />

                    <button type="submit" class="btn btn-primary align-items-center text-center"
                        id="signupBtn">Register</button>
                </form>
            </div>
        </>
    )
}

export default Signup