import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import imgSrc from './../../images/images';


function Login(props) {
  return (
    <div className="container">
        <div className="warapper">
            <span className='logo'>React-Chat-app</span>
        </div>
        <div className="wrapper">
            <div className="left">
                <img src={imgSrc.loginImage} alt="no-image" />
            </div>
            <div className="right">
                <div className="titel">
                    Register Here
                </div>
                <form autoComplete='off'>
                <div className="form-items">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" name="name" id="name" className='form-input' placeholder='Enter Name Here' required/>
                </div>
                <div className="form-items">
                <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" className='form-input' placeholder='Enter email Here' required/>
                </div>
                <div className="form-items"></div>
                <div className="form-items"></div>
                </form>
                <div className="block">
                <NavLink to="/register" className="btn-link">
                    New usser Register Here...
                </NavLink>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Login
