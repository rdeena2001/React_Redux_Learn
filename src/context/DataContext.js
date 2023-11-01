import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/user"
import validator from 'validator';
import { toast } from 'react-toastify';
const DataProvider = createContext({})
const tableData = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com', mobile_no: 9025282820, age: 25 },
    { id: 2, name: 'Jane Smith', email: 'Jane@gmail.com', mobile_no: 9176866275, age: 30 },
    { id: 3, name: 'Bob Johnson', email: 'Bob@gmail.com', mobile_no: 8939656047, age: 35 }
  ];
export function DataContext({ children }) {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile_no, setMobileNo] = useState('');
    const [errors, setErrors] = useState({});
    const [isloading, setIsloading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {

        const fetchData = async () => {
                setIsloading(true)
           
            try {
                const getProfile = await api.get('/tableData')
                console.log(getProfile.data, "999998")
                setData(getProfile.data)

            } catch (err) {
                console.log('Error:', err)
            }


        }
        fetchData();
       
    }, []);

    setTimeout(()=>{
        setIsloading(false)
        }, 2000)
    const handleSubmit = async (e) => {

        e.preventDefault();

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

                let id = data.length ? data[data.length - 1].id + 1 : 1;
                const newData = { id, name: name, email: email, mobile_no: mobile_no }
                const responce = await api.post("/tableData", newData)
                const allData = [...data, responce.data]
                console.log(allData, "deeeena")
                setData(allData)
                setName('')
                setEmail('')
                setMobileNo('')
                // localStorage.setItem("user_details", JSON.stringify(allData))
                // console.log(profileData, "testsssssssssssssssss")  // not used
                // dispatch(createProfileRequest(profileData));
                toast.success('Profile added successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000
                });

                navigate('/home');
            } catch (error) {
                console.error(error);
                // Handle the error, display an error message, etc.
            }
        }
    };

    const handleDelete = async (id) => {

        try {
            console.log(id, "delete")
            const responce = await api.delete(`tableData/${id}`)
            console.log(responce, "responce")
            const deleteData = data.filter(val => val.id !== id)
            setData(deleteData)
            // localStorage.setItem("user_details", JSON.stringify(deleteData))
            if (responce?.status == 200) {
                toast.success('profile deleted successful!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000
                });
            }

        } catch (err) {
            console.log('Error:', err);
        };
    }


    const handleEdit = async (id) => {



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
            newErrors.mobileno = 'Mobile number is required';
        } else if (!validator.isMobilePhone(mobile_no)) {
            newErrors.mobileno = 'Please enter a valid mobile number';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {

                console.log(id, "181")

                // const viewData = data.find(value => (value.mobile_no).toString() == e)
                // let id = viewData.id
                const newData = { id, name: name, email: email, mobile_no: mobile_no }
                const responce = await api.put(`/tableData/${id}`, newData)
                console.log(responce.data, "187")
                let allData = data.map(val => (val.id).toString() === id ? { ...responce.data } : val)
                // console.log(allData, "0909090909")

                setData(allData)
                setName('')
                setEmail('')
                setMobileNo('')
                toast.success('profile updated successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000
                });

                navigate('/home');
            } catch (error) {
                console.error(error);
                // Handle the error, display an error message, etc.
            }
        }
    };
    console.log(isloading,"989898")
    return (
        <DataProvider.Provider value={{
            data, setData, name, setName, email, setEmail, mobile_no,
            setMobileNo, errors, handleDelete, handleSubmit, handleEdit,
            isloading,
        }}>
            {children}
        </DataProvider.Provider>

    )
}

export default DataProvider