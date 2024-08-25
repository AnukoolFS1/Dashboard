import React, { useContext } from 'react'
import axios from 'axios'
import Store from './store'
import './css/portfolio.css'

const Portfolio = () => {
    let { theme, colors } = useContext(Store)
    let [customerData, setCustomersData] = React.useState([])


    const getListData = async () => {
        await axios.get('http://localhost:9090/customers')
            .then((res) => {
                setCustomersData(res?.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    React.useEffect(() => {
        getListData()
    }, [])

    return (
        <section className='portfolio-card'>
            <div className={`portfolio ${colors[theme]}`}>
                <box-icon name='candles' color="white" size="60px"></box-icon>
                <div>
                    <h3>Yeilds</h3>
                    <h2>7%</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam recusandae ipsum vero placeat nesciunt, aspernatur enim error autem laborum laudantium a sit molestiae culpa non at, architecto iusto dignissimos rerum?</p>
                </div>
            </div>

            <div className={`portfolio ${colors[theme]}`}>
                <box-icon type='solid' name='user-plus' color="white" size="60px"></box-icon>
                <div>
                    <h3>Customers</h3>
                    <h2>{customerData.length}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, labore.</p>
                </div>
            </div>

            <div className={`portfolio ${colors[theme]}`}>
                <box-icon type='solid' name='right-down-arrow-circle' color="white" size="60px"></box-icon>
                <div>
                    <h3>Risk</h3>
                    <h2>10%</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci, mollitia neque quod culpa accusamus.</p>
                </div>
            </div>

            <div className={`portfolio ${colors[theme]}`}>
                <box-icon name='comment-detail' color="white" size="60px"></box-icon>
                <div>
                    <h3>Complaints</h3>
                    <h2>0</h2>
                    <p>complaints left</p>
                </div>
            </div>

        </section>
    )
}

export default Portfolio