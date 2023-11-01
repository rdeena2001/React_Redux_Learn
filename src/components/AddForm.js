import React, { useContext, useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { createProfileRequest } from '../action/action';
import axios from 'axios';
import DataProvider from '../context/DataContext';

function AddForm() {
  const { handleSubmit, name, setName, email, setEmail, mobile_no, setMobileNo, errors } = useContext(DataProvider)
  // function AddForm({data, setData}) {
  //   console.log(data,"deena")
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [mobile_no, setMobileNo] = useState('');
  //   const [errors, setErrors] = useState({});
  //   const navigate = useNavigate();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   let newErrors = {};

  //   if (validator.isEmpty(name)) {
  //     newErrors.name = 'Name is required';
  //   }

  //   if (validator.isEmpty(email)) {
  //     newErrors.email = 'Email is required';
  //   } else if (!validator.isEmail(email)) {
  //     newErrors.email = 'Email is invalid';
  //   }

  //   if (validator.isEmpty(mobile_no)) {
  //     newErrors.mobile_no = 'Mobile number is required';
  //   } else if (!validator.isMobilePhone(mobile_no)) {
  //     newErrors.mobile_no = 'Please enter a valid mobile number';
  //   }

  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     try {

  //     let id = data.length ? data[data.length -1].id + 1 : 1;
  //     const newData= { id, name: name, email: email, mobile_no: mobile_no }

  //     const allData= [...data, newData]
  //     console.log(allData,"deeeena")
  //          setData(allData)
  //          setName('')
  //          setEmail('')
  //          setMobileNo('')
  //     localStorage.setItem("user_details", JSON.stringify(allData))
  // console.log(profileData, "testsssssssssssssssss")  // not used
  // dispatch(createProfileRequest(profileData));


  // async function addProfileApi(payload) {
  //   console.log(payload,"222222222222222")
  //   const data = await axios.post('http://localhost:3001/profile/createprofile', payload)

  //   return data;

  // }
  //       toast.success('Profile added successfully', {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 1000
  //       });

  //       navigate('/home');
  //     } catch (error) {
  //       console.error(error);
  //       // Handle the error, display an error message, etc.
  //     }
  //   }
  // };

  return (
    <div className='add'>
      <div className='addform-container'>
        <form className='add-form' onSubmit={handleSubmit}>
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

          <button className='login-btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
