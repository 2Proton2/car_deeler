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
            <Route path='login' element={<Login />} />
            <Route path='sign' element={<Signin />} />
            <Route path='profile' element={<Profile />} />
            <Route path='advertise' element={<Advertise />}/>
          </Route>
          <Route>
            <Route />
          </Route>
          <Route>

          </Route>
          {/* About */}
          {/* Contact */}
          {/* Login */}
          {/* car */}
        </Routes>
    </>
  )
};

export default App;