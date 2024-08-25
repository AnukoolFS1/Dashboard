import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    let [userNames, setUserNames] = React.useState([]); 
    let navigate = useNavigate()
    let [dotuser, setDotuser] = React.useState(false);
    let [dotname, setDotName] = React.useState(false);
    let [dotphone, setDotPhone] = React.useState(false);
    let [dotpswrd, setDotpswrd] = React.useState(false);
    let [dotcnfpswrd, setDotCnfpswrd] = React.useState(false);
    let [showpass, setShowPass] = React.useState(true);
    let [showcnfpass, setShowCnfPass] = React.useState(true);
    let [userName, setUserName] = React.useState('');
    let [cnfPass, setcnfPass] = React.useState('');




    const userdot = (e) => {
        if (e.target.value.length > 0) {
            setDotuser(true)
        } else {
            setDotuser(false)
        }
        setUserName(e.target.value)
    }
    const pswrddot = (e) => {
        if (e.target.value.length > 0) {
            setDotpswrd(true)
        } else {
            setDotpswrd(false)
        }
    }

    const cnfpswrddot = (e) => {
        if (e.target.value.length > 0) {
            setDotCnfpswrd(true)
        } else {
            setDotCnfpswrd(false)
        }
        setcnfPass(e.target.value)
    }

    const namedot = (e) => {
        if (e.target.value.length > 0) {
            setDotName(true)
        } else {
            setDotName(false)
        }
    }

    const phonedot = (e) => {
        if (e.target.value.length > 0) {
            setDotPhone(true)
        } else {
            setDotPhone(false)
        }
    }

    const showPassword = () => {
        setShowPass(!showpass)
    }

    const showcnfPassword = () => {
        setShowCnfPass(!showcnfpass)
    }

    const fetchUserName = async () => {
        try{
            let data = await fetch('http://localhost:9090/Users')
            data = await data.json();
            console.log(data);
            await data?.map(e=>{setUserNames((prev) => [...prev, e.username])})
            console.log(userNames);
        }catch(err){
            console.log(err.message);
        }
    }


    const myFormik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            username: '',
            city: '',
            password: '',
            customers: []
        },

        onSubmit: async function (values, {resetForm}) {
            console.log(userNames);
            console.log(userName);
            let proceed = true
            console.log('test1');
            for (let i = 0; i<=userNames.length;i++) {
                if (userNames[i] === userName) {
                    proceed = false
                    break;
                }
            }
            if (proceed) {
                if(myFormik.values.password === cnfPass){try {
                    let data = await axios.post('http://localhost:9090/Users', values)
                    console.log(data);
                    toast.success('User Created')
                    resetForm();
                    setTimeout(()=>{
                        navigate('/')
                    }, 1000)
                } catch (err) {
                    toast.error(err.message)
                }}else{
                    toast.error('Password did not match')
                }
            }else{
                toast.error('Username Already exist')
            }

        }
    })

    React.useEffect(()=>{
        fetchUserName()
    },[])
    return (
        <section className="body">
            <section className="formbase">
                <h1 className='page-headline'>Project Dashboard</h1>
                <form className="signup" onSubmit={myFormik.handleSubmit} >
                    <h1 className="log-in-up">Sign up</h1>

                    <div className='inputs-signup'>
                        <div className="inputdiv">
                            <input id="name"
                                className="input-style"
                                onInput={namedot} name='name'
                                value={myFormik.values.name}
                                onChange={myFormik.handleChange}
                                type="text" autoComplete='off'

                            />
                            <label htmlFor="name" className="user">
                                Full Name <span className="dot"
                                    style={{ display: dotname ? "none" : "inline" }}>•</span>
                            </label>
                        </div>

                        <div className="inputdiv">
                            <input id="contact"
                                className="input-style"
                                onInput={phonedot} name='phone'
                                value={myFormik.values.phone}
                                onChange={myFormik.handleChange}
                                type="text" autoComplete='off' />
                            <label htmlFor="contact" className="user">
                                Phone <span className="dot"
                                    style={{ display: dotphone ? "none" : "inline" }}>•</span>
                            </label>
                        </div>

                        <div className="inputdiv">
                            <input id="username"
                                className="input-style"
                                onInput={userdot} name='username'
                                value={myFormik.values.username}
                                onChange={myFormik.handleChange}
                                type="text" autoComplete='off' />
                            <label htmlFor="username" className="user">
                                Username <span className="dot"
                                    style={{ display: dotuser ? "none" : "inline" }}>•</span>
                            </label>
                        </div>

                        <div className="inputdiv">
                            <select className='select' name='city'
                                onChange={myFormik.handleChange}
                                value={myFormik.values.city}>
                                <option>--Select--</option>
                                <option> New Delhi </option>
                                <option> Mumbai </option>
                                <option> Bangalore </option>
                                <option> Kolkata </option>
                                <option> Hydrabad </option>
                                <option> Lucknow </option>
                                <option> Chennai </option>
                            </select>
                            <label htmlFor="username" className="user">
                                City {/*<span className="dot"
                                    style={{ display: dotuser ? "none" : "inline" }}>•</span> */}
                            </label>
                        </div>

                        <div className="inputdiv">
                            <input id="password"
                                className="input-style"
                                onInput={pswrddot}
                                type={showpass ? "password" : "text"}
                                name='password'
                                value={myFormik.values.password}
                                onChange={myFormik.handleChange}
                                autoComplete='off' />
                            {dotpswrd && <span className='pswrd-shw' onClick={showPassword}>
                                {showpass ? <span><box-icon name='show' type='solid' ></box-icon></span> : <span>
                                    <box-icon name='hide' type='solid' ></box-icon>
                                </span>}
                            </span>}
                            <label htmlFor="password" className="user">
                                Password <span className="dot"
                                    style={{ display: dotpswrd ? "none" : "inline" }}>•</span>
                            </label>
                        </div>

                        <div className="inputdiv">
                            <input id="cnfpassword"
                                className="input-style"
                                onInput={cnfpswrddot}
                                type={showcnfpass ? "password" : "text"} name=''
                                autoComplete='off' />
                            {dotcnfpswrd && <span className='pswrd-shw' onClick={showcnfPassword}>
                                {showcnfpass ? <span><box-icon name='show' type='solid' ></box-icon></span> : <span>
                                    <box-icon name='hide' type='solid' ></box-icon>
                                </span>}
                            </span>}
                            <label htmlFor="cnfpassword" className="user">
                                Confirm-Password <span className="dot"
                                    style={{ display: dotcnfpswrd ? "none" : "inline" }}>•</span>
                            </label>
                        </div>
                    </div>

                    {/* <div className="inputdiv button-div">

                    </div> */}
                    <button type="submit" className="button-log"> Sign Up </button>
                </form>
            </section>
            <Toaster />
        </section>
    )
}

export default Signup