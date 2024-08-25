import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import Store from './store';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Editcustomer = () => {
    let params = useParams();
    let navigate = useNavigate();

    let { theme, InputFocusBg } = useContext(Store)
    let myFormik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: "",
            location: ''
        },
        onSubmit: async (value, { resetForm }) => {
            await axios.put(`http://localhost:9090/customers/${params.id}`, value)
                .then(res => {
                    toast.success('Edit successfully')
                    resetForm()
                    setTimeout(() => { navigate('/layout/customers') }, 500)
                }).catch(res => {
                    toast.error(res)
                })
        }
    })

    const setValues = async () => {
        console.log(params);
        try {
            let { data } = await axios.get(`http://localhost:9090/customers/${params.id}`);
            myFormik.setValues(data);
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        setValues();
    }, [params.id])

    return (
        <div className='AddCustomers'>
            <form className='inputdiv-customer' onSubmit={myFormik.handleSubmit}>
                <input className={`input-style ${InputFocusBg[theme]}`} type="text" name='name' placeholder='Name' autoComplete='no' onChange={myFormik.handleChange} value={myFormik.values.name} />
                <input className={`input-style ${InputFocusBg[theme]}`} type="text" name='phone' placeholder='Contact' autoComplete='no' onChange={myFormik.handleChange} value={myFormik.values.phone} />
                <input className={`input-style ${InputFocusBg[theme]}`} type="text" name='email' placeholder='Email' autoComplete='no' onChange={myFormik.handleChange} value={myFormik.values.email} />
                <input className={`input-style ${InputFocusBg[theme]}`} type="text" name='location' placeholder='Location' autoComplete='no' onChange={myFormik.handleChange} value={myFormik.values.location} />
                <input type="submit" value="Submit" />
            </form>
            <div className='displayImg'>

            </div>
            <Toaster />
        </div>
    )
}

export default Editcustomer