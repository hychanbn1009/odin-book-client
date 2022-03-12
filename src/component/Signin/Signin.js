import React from "react"
import "./Signin.css"

const Signin =()=>{
    return(
        <div className="container">
            <div>
                <div className="intro-container">
                    <h1>Odinbook</h1>
                    <h2>Odinbook helps you connect and share with the people in your life</h2>
                </div>
                <div className="signin-form">
                    <input type="email" className="form-control" id="email" placeholder="Email Adress"></input>
                    <input type="password" className="form-control" id="password" placeholder="Password"></input>
                    <a className="signin-button">Log In</a>
                    <small>Forgotten password?</small>
                    <div className="break-line"></div>
                    <a className="create-account-button">Create New Account</a>
                </div>
                <p>Create a Page for a celebrity, brand or business.</p>
            </div>
        </div>
    )
}

export default Signin