import React, { useContext } from 'react';
import './css/header.css';
import Store from './store';


const Header = ()=>{
    let {theme, InputFocusBg} = useContext(Store);
    let colors = ['','#0f111a','#ff0000e6','#00ff00']

    return (
        <header className='Header' style={{backgroundColor: colors[theme] }}>
            <h2>Wellcome!</h2>
            <nav>
                <input className={`srch-box ${InputFocusBg[theme]}`} type="search" placeholder='Search...' />
            </nav>
        </header>
    )
}

export default Header