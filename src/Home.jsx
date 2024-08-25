import React,{useContext} from 'react';
import './css/home.css';
import Store from './store';


const Home = () => {
    let {theme,colors} = useContext(Store);


    // console.log(theme, colors);

    return (
            <section className='card-base'>
                <article className={`card ${colors[theme]}`}>
                    <span className='icon'><box-icon name='stats' color="white" size="45px" ></box-icon></span>
                    <h1>Stats</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </article>
                <article className={`card ${colors[theme]}`}>
                    <span className='icon'><box-icon name='calendar-event' color="white" size="45px" ></box-icon></span>
                    <h1>Tasks</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </article>
                <article className={`card ${colors[theme]}`}>
                    <span className="icon"><box-icon name='package' color="white" size="45px" ></box-icon></span>
                    <h1>Packages</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, tenetur.</p>
                </article>
            </section>   
    )
}

export default Home