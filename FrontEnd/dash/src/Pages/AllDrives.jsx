import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideMenu from '../Components/SideMenu';
import '../Styles/Index.css';

const AllDrives= () => {
    return (
 
        <div>
           <div className='index'>
           <div className='sideMenu'> <SideMenu></SideMenu></div>
            <div className='container'>
            <h1>Todos os Acionamentos</h1>
            </div>
            </div>
        </div>
        
    );
}

export default AllDrives;