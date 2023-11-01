import React, { useState, useEffect } from 'react'
import Login from './components/login'
import Register from './components/register'
import Table from './components/table';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';
import ViewForm from './components/ViewForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import validator from 'validator';
// import { toast } from 'react-toastify';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import './App.css'
// import api from "../src/api/user"

import { DataContext } from "./context/DataContext"
const tableData = [
  { id: 1, name: 'John Doe', email: 'john@gmail.com', mobile_no: 9025282820, age: 25 },
  { id: 2, name: 'Jane Smith', email: 'Jane@gmail.com', mobile_no: 9176866275, age: 30 },
  { id: 3, name: 'Bob Johnson', email: 'Bob@gmail.com', mobile_no: 8939656047, age: 35 }
];

function App() {
  // const [currentForm, setCurrentForm] = useState('login')
  // const [data, setData] = useState([]);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [mobile_no, setMobileNo] = useState('');
  // const [errors, setErrors] = useState({});
  // const navigate = useNavigate()

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName)
  // }  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const getProfile = await api.get('/tableData')
  //       console.log(getProfile.data, "999998")
  //       setData(getProfile.data)
  //     } catch (err) {
  //       console.log('Error:', err)
  //     }


  //   }
  //   fetchData();
  // }, []);

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

  //       let id = data.length ? data[data.length - 1].id + 1 : 1;
  //       const newData = { id, name: name, email: email, mobile_no: mobile_no }
  //       const responce = await api.post("/tableData", newData)
  //       const allData = [...data, responce.data]
  //       console.log(allData, "deeeena")
  //       setData(allData)
  //       setName('')
  //       setEmail('')
  //       setMobileNo('')
  //       // localStorage.setItem("user_details", JSON.stringify(allData))
  //       // console.log(profileData, "testsssssssssssssssss")  // not used
  //       // dispatch(createProfileRequest(profileData));
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

  // const handleDelete = async (id) => {

  //   try {
  //    console.log(id,"delete")
  // const responce =  await api.delete(`tableData/${id}`)
  //    console.log(responce.data)
  //     const deleteData = data.filter(val => val.id !== id)
  //     console.log(deleteData, "76766")
  //     setData(deleteData)
  //     // localStorage.setItem("user_details", JSON.stringify(deleteData))
  //     if (responce?.data?.status == '200') {
  //       toast.success('profile deleted successful!', {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 1000
  //       });
  //     }

  //   } catch (err) {
  //     console.log('Error:', err);
  //   };
  // }


  // const handleEdit = async (id) => {



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
  //     newErrors.mobileno = 'Mobile number is required';
  //   } else if (!validator.isMobilePhone(mobile_no)) {
  //     newErrors.mobileno = 'Please enter a valid mobile number';
  //   }

  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     try {

  //      console.log(id,"181")

  //       // const viewData = data.find(value => (value.mobile_no).toString() == e)
  //       // let id = viewData.id
  //       const newData = { id, name: name, email: email, mobile_no: mobile_no }
  //       const responce = await api.put(`/tableData/${id}`, newData)
  //       console.log(responce.data,"187")
  //       let allData = data.map(val => (val.id).toString()=== id ? { ...responce.data } : val)
  //       // console.log(allData, "0909090909")

  //       setData(allData)
  //       setName('')
  //       setEmail('')
  //       setMobileNo('')
  //       toast.success('profile updated successfully', {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 2000
  //       });

  //       navigate('/home');
  //     } catch (error) {
  //       console.error(error);
  //       // Handle the error, display an error message, etc.
  //     }
  //   }
  // };
  return (

    <>
      <DataContext>
        <ToastContainer autoClose={1000} position='top-right' />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={`/home`} element={<Table
          // data={data}
          // handleDelete={handleDelete}
          />} />
          <Route path={`/login`} element={<Login />} />
          <Route path={`/register`} element={<Register />} />
          <Route path={`/AddForm`} element={<AddForm
          // handleSubmit={handleSubmit}
          // name={name}
          // setName={setName} 
          // email={email}
          // setEmail={setEmail}
          // mobile_no={mobile_no}
          // setMobileNo={setMobileNo}
          // errors={errors}

          />} />
          <Route path={`/UpdateForm/:id`} element={<UpdateForm
          // data={data}
          // handleEdit={handleEdit}
          // name={name}
          // setName={setName}
          // email={email}
          // setEmail={setEmail}
          // mobile_no={mobile_no}
          // setMobileNo={setMobileNo}
          // errors={errors}
          />} />
          <Route path={`/ViewForm/:id`} element={<ViewForm
          // data={data}
          // name={name}
          // setName={setName}
          // email={email}
          // setEmail={setEmail}
          // mobile_no={mobile_no}
          // setMobileNo={setMobileNo}
          />} />

        </Routes>
      </DataContext>
    </>
  )
}




export default App