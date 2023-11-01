import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AddForm from './AddForm';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useContext } from 'react';
import DataProvider from '../context/DataContext';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProfileSuccess } from '../action/action';
// import profileSaga from '../saga';

function Table() {
  const { data, handleDelete, isloading } = useContext(DataProvider)


  // const data = useSelector((state) => state.profileReducer.data);

  // const dispatch = useDispatch();




  // useEffect(()=>{
  //   const fetchData= async ()=>{
  //     try{
  //         const  getProfile= await axios.get('http://localhost:3001/profile/all')
  // console.log(getProfile.data.data,"999998")
  //         setData(getProfile.data.data)
  //     }catch(err){
  //         console.log('Error:',err)
  //     }


  // }
  //   fetchData();
  //  },[]);


  // useEffect(()=>{
  //     fetchData();
  //     if(data){
  //         setData(prevData => prevData.slice(1))
  //     }
  //    },[]);


  console.log(isloading, "'''")
  return (
    <>
      {isloading && <p className="loading">Data Loading.....</p>}
      {!isloading && (data.length ?
        <div className='box-table'>
          <div className='card'>
            <button className='card-btn'> <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/AddForm`}>Add</NavLink></button>
            <table className="custom-table">
              <thead>
                <tr >
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobileno</th>
                  <th>Action</th>
                </tr>

              </thead>
              <tbody>
                {data?.length > 0 && data.map((item, index) =>

                (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile_no}</td>
                    <td>
                      <button className='view-btn'> <NavLink style={{ textDecoration: 'none', color: 'yellow' }} to={`/ViewForm/${item.id}`}>View</NavLink></button>
                      <button className='update-btn'> <NavLink style={{ textDecoration: 'none', color: 'yellow' }} to={`/UpdateForm/${item.id}`}>Update</NavLink></button>
                      <button className='delete-btn' style={{ textDecoration: 'none', color: 'yellow' }} onClick={() => handleDelete(item.id)}>Delete</button></td>
                  </tr>
                )

                )}

              </tbody>
            </table>

          </div>

        </div>
        :
        <div>
          <h2  className="statusMsg"> No Data !</h2>
          <div className='box-table'>
            <div className='card'>
              <button className='card-btn'> <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/AddForm`}>Add</NavLink></button>
              <table className="custom-table">
                <thead>
                  <tr >
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobileno</th>
                    <th>Action</th>
                  </tr>

                </thead>
              </table>

            </div>

          </div>
        </div>
      )}
    </>
  )
}



export default Table