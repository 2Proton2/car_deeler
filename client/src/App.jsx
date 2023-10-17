import React from 'react';
import Header from './components/Header/index'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/index';
import About from './pages/about/index';
import Contact from './pages/contact/index';
import Login from './pages/login/index';
import Signin from './pages/sign/index';
import Profile from './pages/profile/index';
import Advertise from './pages/advertise/index';
import Customer from './pages/login/customer-login/index';
import Admin from './pages/login/admin-login/index';
import Cars from './pages/cars/index';
import Particular_car from './pages/particular_car/index';

const App = () => {
  return (
    <>
        <Header />
        <Routes>
          {/* Home */}
          <Route path='/'>
            <Route index={true} element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='/user/login' element={<Login />} />
            <Route path='/user/login/admin' element={<Admin/>} />
            <Route path='/user/login/customer' element={<Customer/>} />
            <Route path='sign' element={<Signin />} />
            <Route path='profile' element={<Profile />} />
            <Route path='advertise' element={<Advertise />}/>
            <Route path='cars' element={<Cars />} />
            <Route path='cars/:carname/:id' element={<Particular_car />} />
          </Route>
        </Routes>
    </>
  )
};

export default App;