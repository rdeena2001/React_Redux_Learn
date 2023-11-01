import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getAllUsers, DeleteUserForm, getUsersStatus, getUsersError , deleteUsers, getUsers} from '../Features/userSlice'

function UserList() {
//    const {id}  = useParams()
    const data= useSelector(getAllUsers)
    const status= useSelector(getUsersStatus)
    const errors= useSelector(getUsersError)
    const dispatch = useDispatch()
    
  
    if(status === 'failed') {
        console.log("Error Fetching Data:",errors)
    }


    const onDeletePostClicked = (item) => {
      console.log("item", item)
      try {
          dispatch(
            deleteUsers({ id: item.id }))

      } catch (err) {
          console.error('Failed to delete the post', err)
      } 
  }
  return (
        <>
          {/* {isloading && <p className="loading">Data Loading.....</p>} */}
          {/* {!isloading && (data.length ? */}
          { status === 'succeeded' && (data.length ?
        
            <div className='box-table'>
              <div className='card'>
                <button className='card-btn'> <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/AddUser`}>Add</NavLink></button>
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
                          <button className='delete-btn' style={{ textDecoration: 'none', color: 'yellow' }} onClick={()=>onDeletePostClicked(item)}>Delete</button></td>
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
          )
            } 
          {/* )} */}
        </>
      
  )
}

export default UserList