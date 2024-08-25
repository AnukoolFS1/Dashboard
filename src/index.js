import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routing, Routes, Route } from 'react-router-dom';
import Loginpage from './Loginpage';
import Layout from './Layout';
import Home from './Home';
import Signup from './Signup';
import Customer from './Customers';
import Settings from './Settings';
import AddCustomer from './AddCustomer';
import 'boxicons';
import './css/GlobalCSS.css'
import Editcustomer from './Editcustomer';
import Portfolio from './Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Routing>
    <Routes>
      <Route path='/' element={<Loginpage/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/layout' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="customers" element={<Customer/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="addcustomers" element={<AddCustomer/>} />
          <Route path="editcustomers/:id" element={<Editcustomer/>} />
          <Route path="preferences" element={<Settings/>} />
      </Route>
    </Routes>
  </Routing>
)