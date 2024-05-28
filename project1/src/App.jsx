import React, { useEffect } from 'react';
import "./App.css"
import {  Route,Routes, BrowserRouter,NavLink } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import LoginSign from './component/LoginSign';
import Error from './component/Error';
import Company from './component/Company';
import Chanale from './component/Chanale';
import Other from './component/Other';
import Useref from './component/Useref';
import Usereducer from './component/UseReducer';
import Taxtarea from './component/Taxtarex';
import ArrayReverser from './component/ArrayReverser';
import DomainNameSearch from './component/DomainNameSearch';
import { useState } from 'react';
const App = () => {
  const [color, setColor] = useState('#000');
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
};

  return (
    <BrowserRouter>   
    <div className='nav' style={{backgroundColor:color,transition:"all 1s ease in out"}}> 
    <div className='logo'><button onClick={generateRandomColor}><span>Lo</span>go</button></div>
    <div className='manu'>
      <ul>
        <li><NavLink className="NavLink" to="/">Home</NavLink></li>
        <li> <NavLink className="NavLink" to="/about">About</NavLink></li>
        <li> <NavLink className="NavLink" to="/contact">Contact</NavLink></li>
        <li><NavLink className="NavLink" to="/loginsign"> LoginSign</NavLink></li>
      </ul>
      </div>
    
   
   
    </div>
     <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact/" element={<Contact/>}>
          <Route path='company' element={<Company/>}/>
          <Route path='chanale' element={<Chanale/>}/>
          <Route  path='useref' element={<Useref/>}/>
          <Route path='other' element={<Other/>}/>
          <Route path='usereducer' element={<Usereducer/>}/>
          <Route path='taxtarea' element={<Taxtarea/>}/>
          <Route  path='arrayreverser' element={<ArrayReverser/>}/>
          <Route path='domainnamesearch' element={<DomainNameSearch/>}/>
        </Route>
        <Route path='/loginsign' element={<LoginSign/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>

  );
};

export default App;