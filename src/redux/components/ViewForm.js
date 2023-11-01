import React, { useState } from 'react'
import { SelectUserById } from '../Features/userSlice';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ViewForm() {
    const {id}=  useParams()

    const  user = useSelector(state=> SelectUserById(state, id))
    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [mobile_no, setMobileNo] = useState(user?.mobile_no);
  return (
    <div className='add'>
    <div className='addform-container '>
      <form className='add-form'>
        <label htmlFor='name'>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name='name'
          type='text'
          autoComplete='name'
          disabled={true} 
          // placeholder='Enter your name'
        />
       

        <label htmlFor='email'>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          type='email'
          autoComplete='email'
          disabled={true} 
          // placeholder='Enter your email'
        />
       

        <label htmlFor='mobileno'>Mobile No</label>
        <input
          value={mobile_no}
          onChange={(e) => setMobileNo(e.target.value)}
          name='mobile_no'
          type='text'
          autoComplete='mobile_no'
          disabled={true} 
          // placeholder='Enter your mobile number'
        />

        <button className='login-btn' type='submit'>
        <NavLink to={'/home'}> Back</NavLink>
        </button>
      </form>
    </div>
  </div>
  )
}

export default ViewForm