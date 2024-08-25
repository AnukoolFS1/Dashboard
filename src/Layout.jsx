import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './css/layout.css'
import Store from './store'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const colors = ['','bgDark','bgRed','bgGreen']
    const InputFocusBg = ['','inputDark','inputRed','inputGreen']
    const bgColors = ['#0d2147','#1a1f2a','#aa2e2e','#345502d3']

    let [theme, setTheme] = React.useState(0);


    return (
        <Store.Provider value={{theme,setTheme, colors, InputFocusBg}}>
            <section className='base'>

                <Sidebar />

                <div className='header-content'>

                    <Header />

                    <div className='content' style={{backgroundColor:bgColors[theme]}}>
                        <Outlet></Outlet>
                    </div>
                </div>
            </section>
        </Store.Provider>
    )
}

export default Layout