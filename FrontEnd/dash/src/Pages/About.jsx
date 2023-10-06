import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideMenu from '../Components/SideMenu';
import '../Styles/Index.css';

const About= () => {
    return (
 
        <div>
           <div className='index'>
           <div className='sideMenu'> <SideMenu></SideMenu></div>
            <div className='container'>
            <h1>Sobre Nós</h1>
            </div>
            </div>
        </div>
        
    );
}

export default About;