import React, { useState } from 'react'

import { toast } from 'react-toastify'
import validator from 'validator'
import { NavLink, useNavigate } from 'react-router-dom';


function Register(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()
  let newErrors = {};
  let handleClick;
  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name.trim()) {
      newErrors.name = "Name is required"
    }

    if (validator.isEmpty(email)) {
      newErrors.email = "Email is required"
    } else if (!validator.isEmail(email)) {
      newErrors.email = "Email is invalid"
    }

    if (validator.isEmpty(pass)) {
      newErrors.pass = "Password is required"
    } else if (!validator.isStrongPassword(pass)) {
      newErrors.pass = "Password is weak"
    }

    setErrors(newErrors);


    if (Object.keys(newErrors).length === 0) {
      console.log("099999999999999")
      toast.success('Register successful!', { 
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
      });
      navigate('/home')
    };
  }



  return (
    <div className='App'>
    <div className='form-container '>
      <form className='register-form'  onSubmit={handleSubmit}>

        <label for='name' >Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type='text' name='name' autoComplete='name'  placeholder='Enter your name' />
        {errors.name && <span>{errors.name}</span>}
        <label for='email' >Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' name='email' autoComplete='email' placeholder='Enter your email' />
        {errors.email && <span>{errors.email}</span>}
        <label for='password'>password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' name='password' autoComplete='password' placeholder='Enter your password' />
        {errors.pass && <span>{errors.pass}</span>}
        <button className='login-btn' type='submit' >Register</button>
      </form>
      {/* <button className='link-button' onClick={() => props.onFormSwith('login')}>Back to Login</button> */}
      <NavLink to={`/login`}>Back to Login</NavLink>

    </div>
    </div>

  )
}


export default Register