import React from 'react';
import './css/Sidebar.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Store from './store';

const Sidebar = () => {

    let {theme, colors} = useContext(Store)
    let [showUser, setShowUser] = React.useState(false);
    let navigate = useNavigate()
    

    function usertgl(e){
        if(e.target.title === 'userr'){
            setShowUser(!showUser)
        }else{
            setShowUser(false)
        }
    }


    function logOut(){
        let x = window.confirm('Do you want to log-out');
        if(x){
            navigate('/')
        }
    }
    return (
        <section className={`sidebar ${colors[theme]}`} onClick={usertgl}>
            <div>
                <h2 className="sidebar-head">Menu</h2>
                <ul className="navigator">
                    <li className="navs" onClick={()=>{navigate('')}}>Home</li>
                    <li className="navs" onClick={()=>{navigate('customers')}}>Customers</li>
                    <li className="navs" onClick={()=>{navigate('portfolio')}}>Portfolio</li>
                    <li className="navs" onClick={()=>navigate('preferences')}>Settings</li>
                </ul>
            </div>
            <div>
                <ul className={showUser?"show-user navigator":"hide-user navigator"} style={{ transition: ".1s all" }}>
                    <li className="navs">Edit Profile</li>
                    <li className="navs" onClick={logOut}>Log Out</li>
                </ul>
                <h2 className="dash-user" title='userr' onClick={usertgl}>User</h2>
            </div>
        </section>

    )
}

export default Sidebar