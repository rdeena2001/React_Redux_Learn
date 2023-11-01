import React, { useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
// import validator from 'validator';
// import { toast } from 'react-toastify';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import '../App.css'
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UpdateForm from '../redux/components/UpdateForm';
import { ToastContainer } from 'react-toastify';
import ViewForm from '../redux/components/ViewForm';
import Login from '../components/login';
import Register from '../components/register';



function ReduxApp() {

    return (

        <>
            <ToastContainer autoClose={1000} position='top-right' />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path={`/register`} element={<Register />} />
                <Route path={`/home`} element={<UserList />} />
                <Route path={`/AddUser`} element={<AddUser />} />
                <Route path={`/UpdateForm/:id`} element={<UpdateForm />} />
                <Route path={`/ViewForm/:id`} element={<ViewForm />} />
            </Routes >

        </>
    )
}




export default ReduxApp