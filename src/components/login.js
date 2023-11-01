import React, { useState } from 'react'
import { toast } from 'react-toastify'
import validator from 'validator'
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {}; 

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!validator.isEmail(email)) {
      newErrors.email = "Email is invalid"
    }

    if (validator.isEmpty(pass)) {
      newErrors.pass = "Password is required"
    }
    // else if(!validator.isStrongPassword(pass)){
    //   newErrors.pass="Password is weak"
    // }

    setErrors(newErrors);
    console.log(Object.keys(newErrors).length === 0,"323")
    if (Object.keys(newErrors).length === 0) {
      console.log("e23")
      toast.success('Login successful!', {
         position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      }
      )
      navigate('/home')
      
    };
    

  }



  return (
    <div className='App'>
      <div className='form-container '>
      <form className='login-form'  onSubmit={handleSubmit}>
        <label for='email' >Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type='email'  autoComplete="email" placeholder='Enter your email' />
        {errors.email && <h4>{errors.email}</h4>}
        <label for='password'>password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} name="password"  type='password'    autoComplete="password" placeholder='Enter your password' />
        {errors.pass && <h4>{errors.pass}</h4>}
        {/* <> */}
        <button className='login-btn' type='submit' >Login</button>

        {/* <Navbar isLoggedIn={isLoggedIn} /> */}
        {/* {isLoggedIn ? 
        <p>You are logged in.</p> : <p>Please login to continue.</p>} */}
        {/* </> */}



      </form>
      {/* <button className='link-button' to={`/register`} onClick={() => props.onFormSwith('/register')}>New User?</button> */}
      <NavLink className='link-button'to={`/register`}>New User?</NavLink>

    </div>
    </div>

  )
}




export default Login