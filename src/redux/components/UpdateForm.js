import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { SelectUserById, UpdateUserForm, updateUsers } from '../Features/userSlice';
import { toast } from 'react-toastify';
import validator from 'validator';

function UpdateForm() {
  const {id}=  useParams()

    const  user = useSelector(state=> SelectUserById(state, id))
    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [mobile_no, setMobileNo] = useState(user?.mobile_no);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const OnSubmitFormUpdate= () =>{
        // if(name && email && mobile_no){
            
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
        }else if (!validator.isMobilePhone(mobile_no)) {
            newErrors.mobile_no = 'Please enter a valid mobile number';
        }
       
        setErrors(newErrors);
      
        if (Object.keys(newErrors).length === 0) {
            try {
        //   console.log(name, email, mobile_no)
          dispatch( 
              updateUsers({id:user.id, name, email, mobile_no })
          )
          setName('')
          setEmail('')
          setMobileNo('')
          toast.success('Profile updated successfully', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000
        });

        navigate('/home');
    } catch (error) {
        console.error(error);
        // Handle the error, display an error message, etc.
    }
}
        // }
    }

  return (
    <div className='add'>
    <div className='addform-container '>
        <form className='add-form' onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor='name'>Name</label>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name='name'
                type='text'
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
                autoComplete='email'
                placeholder='Enter your email'
            />
            {errors.email && <h4>{errors.email}</h4>}

            <label htmlFor='mobileno'>Mobile No</label>
            <input
                value={mobile_no}
                onChange={(e) => setMobileNo(e.target.value)}
                name='mobile_no'
                type='text'
                autoComplete='mobile_no'
                placeholder='Enter your mobile number'
            />
            {errors.mobile_no && <h4>{errors.mobile_no}</h4>}

            <button className='login-btn' type='submit' onClick={OnSubmitFormUpdate}>
                Submit
            </button>
        </form>
    </div>
</div>
  )
}

export default UpdateForm