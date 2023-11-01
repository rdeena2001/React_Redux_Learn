import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
// users: [{ id: 1, name: 'John Doe', email: 'john@gmail.com', mobile_no: 9025282820 },
// { id: 2, name: 'Jane Smith', email: 'Jane@gmail.com', mobile_no: 9176866275 },
// { id: 3, name: 'Bob Johnson', email: 'Bob@gmail.com', mobile_no: 9939666087 }
// ]

const baseURL = 'http://localhost:3500/tableData'
const initialState = {
    users: [],
    status: 'idle', // "idle" || "loading" || "succeeded" || "failed"
    error: null
}


export const getUsers = createAsyncThunk('tableData/fetchData', async () => {
    const responce = await axios.get(baseURL)
    // console.log(responce,"44")
    return responce.data
})

export const addNewUsers = createAsyncThunk('tableData/addData', async (initialState) => {
    const responce = await axios.post(baseURL, initialState)
    return responce.data
})


export const updateUsers = createAsyncThunk('/tableData/updateData', async (initialState) => {
    const { id } = initialState
    const responce = await axios.put(`${baseURL}/${id}`, initialState)
    return responce.data
})

export const deleteUsers = createAsyncThunk('/tableData/deleteData', async (initialState) => {
   
    const  {id}  = initialState
    console.log(id,"89989898")
    const responce = await axios.delete(`${baseURL}/${id}`)
    if (responce?.status === 200) return initialState;

})

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        // AddUserForm: {
        //     reducer(state, action) {
        //         state.users.push(action.payload)
        //     },
        //     prepare(name, email, mobile_no) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 name,
        //                 email,
        //                 mobile_no
        //             }
        //         }
        //     }
        // },
        // UpdateUserForm: (state, action) => {

        //     const updatedData = state.users.map(val => val.id === action.payload.id ? { ...action.payload } : val)
        //     state.users = updatedData
        // },
        // DeleteUserForm: (state, action) => {
        //     const id = action.payload

        //     let DeletedData = state.users.filter(user => user.id !== id)

        //     state.users = DeletedData

        // },

    },
    extraReducers(builder) {
        builder
            .addCase(getUsers.pending, (state, action) => {
                console.log(1)
                state.status = 'loading'
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(2)
                state.users = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                console.log(3)
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewUsers.fulfilled, (state, action) => {
                console.log(action.payload,"111")
                // action.payload.id = state.users.length ? state.users[state.users.length - 1].id + 1 : 1

                state.users.push(action.payload)
            })
            .addCase(updateUsers.fulfilled, (state, action) => {
                const { id } = action.payload
                console.log(id, "1")
                // const updatedData = state.users.filter(user=> user.id !== id)
                const updatedData = state.users.map(val => val.id === id ? { ...action.payload } : val)

                console.log(updatedData, "2")
                // state.users = [...updatedData, action.payload]
                state.users = updatedData

            })
            .addCase(deleteUsers.fulfilled, (state, action) => {
                console.log(action,"0909990", action.payload)
                const { id } = action.payload
                const DeletedData = state.users.filter(user => user.id !== id)

                state.users = DeletedData

            })
    }

})

export const getAllUsers = (state) => state.users.users
export const getUsersStatus = (state) => state.users.status
export const getUsersError = (state) => state.users.error

export const SelectUserById = (state, userid) => state.users.users.find(user => (user.id).toString() === userid)




export const { AddUserForm, UpdateUserForm, DeleteUserForm } = userSlice.actions;

export default userSlice.reducer
