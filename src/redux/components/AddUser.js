
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddUserForm, addNewUsers } from '../Features/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import validator from 'validator';
function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile_no, setMobileNo] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const OnSubmitForm= () =>{
    //   if(name && email && mobile_no){
    //     console.log(name, email, mobile_no)
    let newErrors = {};

    if (validator.isEmpty(name)) {
        newErrors.name = 'Name is required';
    }

    if (validator.isEmpty(email)) {
        newErrors.email = 'Email is required';
    } else if (!validator.isEmail(email)) {
        newErrors.email = 'Email is invalid';
    }

    if (validator.isEmpty(mobile_no)) {
        newErrors.mobile_no = 'Mobile number is required';
    } else if (!validator.isMobilePhone(mobile_no)) {
        newErrors.mobile_no = 'Please enter a valid mobile number';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        try {
        dispatch( 
            addNewUsers ({name,email, mobile_no} )
        )
        setName('')
        setEmail('')
        setMobileNo('')
        toast.success('Profile added successfully', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000
        });

        navigate('/home');
    } catch (error) {
        console.error("Failed to add user",error);
        // Handle the error, display an error message, etc.
    }
}
  }
//   const [errors, setErrors] = useState({});
  return (
    <div className='add'>
    <div className='addform-container'>
      <form className='add-form' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor='name'>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name='name'
          type='text'
          required
          autoComplete='name'
          placeholder='Enter your name'
        />
        {errors.name && <h4>{errors.name}</h4>}

        <label htmlFor='email'>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          type='email'
          required
          autoComplete='email'
          placeholder='Enter your email'
        />
        {errors.email && <h4>{errors.email}</h4>}

        <label htmlFor='mobile_no'>Mobile No</label>
        <input
          value={mobile_no}
          onChange={(e) => setMobileNo(e.target.value)}
          name='mobile_no'
          type='text'
          required
          autoComplete='mobile_no'
          placeholder='Enter your mobile number'
        />
        {errors.mobile_no && <h4>{errors.mobile_no}</h4>}

        <button className='login-btn' type='submit' onClick={OnSubmitForm}>
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default AddUser