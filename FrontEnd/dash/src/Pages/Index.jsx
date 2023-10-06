import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideMenu from '../Components/SideMenu';
import '../Styles/Index.css';
import BarChart from   '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';

const DashBoard= () => {
    return (
 
        <div>
           <div className='index'>
           <div className='sideMenu'> <SideMenu></SideMenu></div>
            <div className='container'>
            <h1 className='title'>Dashboard</h1>
            <div>
            <div className='charts'>
            <div className='barchart'><LineChart></LineChart></div>
            <div className="container"><div><label htmlFor="datas">Selecione o Dia</label></div>
            <div><input type="date" name="datas" id="" /></div></div>
            <DoughnutChart></DoughnutChart>
            
            <BarChart></BarChart>
            <PieChart></PieChart>
            </div>
            </div>
            </div>
             </div>
        </div>
        
    );
}

export default DashBoard;