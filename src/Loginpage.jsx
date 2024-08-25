import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import './css/App.css';
import { ErrorMessage } from 'formik';

const Loginpage = () => {
    let navigate = useNavigate()
    const [userdata, setUserData] = React.useState([])
    let [dotuser, setDotuser] = React.useState(false);
    let [dotpswrd, setDotpswrd] = React.useState(false);
    let [showpass, setShowPass] = React.useState(true);
    let [dep, setDep] = React.useState(0)
    let [inputvals, setInputVals] = React.useState({
        username: '',
        password: ''
    })

    const RetrieveData = async () => {
        try {
            let x = await fetch('http://localhost:9090/Users');
            x = await x.json();
            setUserData(x);
        }
        catch (err) {
            console.log('Error: Server failed');
        }
    }
    
    const userdot = (e) => {
        if (e.target.value.length > 0) {
            setDotuser(true)
        } else {
            setDotuser(false)
        }
    }
    const pswrddot = (e) => {
        if (e.target.value.length > 0) {
            setDotpswrd(true)
        } else {
            setDotpswrd(false)
        }
    }

    const showPassword = () => {
        setShowPass(!showpass)
    }

    const InputVals = (e) => {
        setInputVals({
            ...inputvals,
            [e.target.name]: e.target.value
        })
    }

    const Login = () => {
        let Lgin = false
        setDep(Math.random());
        for (let i = 0; i < userdata.length; i++) {
            if (userdata[i].username === inputvals.username && userdata[i].password === inputvals.password) {
                Lgin = true;
                break;
            }
        }
        if (Lgin) {
            toast.success('Log In Successfull')
            setTimeout(() => {
                navigate('/layout')
            }, 1000)
        } else {
            toast.error('Login Failed, Some credentials have field wrong')
        }
    }


    React.useEffect(() => {
        RetrieveData();

        return () => RetrieveData
    }, [dep])
    return (
        <section className="body">
            <section className="formbase">
                <h1 className='page-headline'>Project Dashboard</h1>
                <form className="form" >
                    <h1 className="log-in-up">Log in</h1>
                    <div className="inputdiv">
                        <input id="username"
                            className="input-style"
                            onInput={userdot}
                            onChange={InputVals}
                            name='username'
                            type="text" autoComplete='off' />
                        <label htmlFor="username" className="user">
                            Username <span className="dot"
                                style={{ display: dotuser ? "none" : "inline" }}>•</span>
                        </label>
                    </div>
                    <div className="inputdiv">
                        <input id="password"
                            className="input-style"
                            onInput={pswrddot}
                            onChange={InputVals}
                            type={showpass ? "password" : "text"} name='password'
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
                        <button type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                                Login()
                            }}
                            className="button-log">
                            Login</button>
                    </div>
                    <div className="anchors">
                        {/* <p title="Click to change password">Forget password</p> */}
                        <p title="Click to create a new user" onClick={() => navigate('/signup')}>Sign Up</p>
                    </div>
                </form>
            </section>
            <Toaster />
        </section>
    )
}


export default Loginpage