
import React, { useState, useEffect, useCallback, useContext } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import DataProvider from '../context/DataContext';


function UpdateForm() {
const { data ,handleEdit, name, setName, email, setEmail, mobile_no, setMobileNo, errors} = useContext(DataProvider)
     const { id } = useParams('')
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [mobile_no, setMobileNo] = useState('');
    // const [errors, setErrors] = useState({});
    console.log(id,"16")
    const viewData= data.find(value => (value.id).toString()=== id)
    console.log(viewData,"")
    useEffect(() => {
       
        if(viewData){
          setName(viewData.name);
            setEmail(viewData.email);
            setMobileNo(viewData.mobile_no);
        }
        }, []);

   
    // const fetchData = async () => {
    //     try {
    //         console.log()
    //         const response = await axios.get(`http://localhost:3001/profile/getprofile/${mobileno}`);
    //         console.log(response.data.data, "98989888888888")
    //         const { name, email, mobile_no } = response.data.data;
    //         setName(name);
    //         setEmail(email);
    //         setMobileNo(mobile_no);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    // let getData=  data.filter(ch=>ch.mobile_no==mobileno)
    // console.log(getData,"877878")
    // setData(getData)
   

    // const handleEdit = async (e) => {
        
    //     e.preventDefault();

    //     let newErrors = {};

    //     if (validator.isEmpty(name)) {
    //         newErrors.name = 'Name is required';
    //     }

    //     if (validator.isEmpty(email)) {
    //         newErrors.email = 'Email is required';
    //     } else if (!validator.isEmail(email)) {
    //         newErrors.email = 'Email is invalid';
    //     }

    //     if (validator.isEmpty(mobile_no)) {
    //         newErrors.mobileno = 'Mobile number is required';
    //     } else if (!validator.isMobilePhone(mobile_no)) {
    //         newErrors.mobileno = 'Please enter a valid mobile number';
    //     }

    //     setErrors(newErrors);

    //     if (Object.keys(newErrors).length === 0) {
    //         try {

             
    //             const newData= { id, name: name, email: email, mobile_no: mobile_no }
    //             let allData = data.map(val => val.mobile_no===mobileno ? {...newData} : val)
    //             console.log(allData,"0909090909")
                 
    //                  setData(allData)
    //                  setName('')
    //                  setEmail('')
    //                  setMobileNo('')
    //             localStorage.setItem("user_details", JSON.stringify(allData))
    //             // const response = await axios.put(`http://localhost:3001/profile/updateprofile`, {
    //             //     name,
    //             //     email,
    //             //     mobile_no
    //             // });

    //             // console.log(response.data);
    //             toast.success('profile updated successfully', {
    //                 position: toast.POSITION.TOP_RIGHT,
    //                 autoClose: 2000
    //             });

    //             navigate('/home');
    //         } catch (error) {
    //             console.error(error);
    //             // Handle the error, display an error message, etc.
    //         }
    //     }
    // };

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
                    {errors.mobileno && <h4>{errors.mobileno}</h4>}

                    <button className='login-btn' type='submit' onClick={()=>handleEdit(id)}handleEdit>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateForm;
