import React, { useContext, useState } from 'react';
import axios from 'axios';
import './css/Customer.css';
import Store from './store';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const Customer = () => {
    let [dp, setdp] = useState(0)
    let { theme, colors } = useContext(Store)
    let [customerData, setCustomersData] = React.useState([])
    let navigate = useNavigate()


    const getListData = async () => {
        await axios.get('http://localhost:9090/customers')
            .then((res) => {
                setCustomersData(res?.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const dltCstmr = async (e) => {
        try {
            await axios.delete(`http://localhost:9090/customers/${e.id}`)
            toast.error('Customer details have deleted')
            console.log('testing delete');
        } catch (err) {
            toast.error('Action failed')
        }
    }


    React.useEffect(() => {
        getListData()
    }, [dp])

    return (
        <>
            <section>
                <div className={`card ${colors[theme]}`}>
                    <h1>{customerData.length}</h1>
                    <p>total customers</p>
                </div>
                <button className='add-cust button-log' onClick={() => { navigate('/layout/addcustomers') }}>Add Customer</button>

                <hr />
                <h1 className='heading-customers'>List of customers</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customerData?.map((e) => {
                                    return (
                                        <tr key={e.id}>
                                            <td>{e.name}</td>
                                            <td>{e.phone}</td>
                                            <td>{e.email}</td>
                                            <td>{e.location}</td>
                                            <td style={{ display: "flex", gap: "10px" }}>
                                                <span
                                                    className='icon icon-trash'
                                                    onClick={() => {
                                                        dltCstmr(e); setdp(Math.random())
                                                    }}><box-icon type='solid' name='trash' color="white"></box-icon></span>
                                                <span className='icon icon-edit' onClick={()=>{navigate(`/layout/editcustomers/${e.id}`)}}><box-icon type='solid' name='edit' color="white"></box-icon></span>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </section>
            <Toaster/>
        </>
    )
}

export default Customer;