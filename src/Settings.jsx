import React, { useContext } from 'react';
import Store from './store';

const Settings = () => {
    let { theme, setTheme, colors } = useContext(Store)

    const updateTheme = () => {
        setTheme(prev => (prev + 1) % colors.length)
    }

    
    return (
        <section>
            <section className={`Theme ${colors[theme]}`} onClick={updateTheme}>
                <h3>Theme </h3>
            </section>
        </section>
    )
}

export default Settings