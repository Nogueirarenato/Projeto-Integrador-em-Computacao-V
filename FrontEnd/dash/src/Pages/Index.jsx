import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideMenu from '../Components/SideMenu';
import '../Styles/Index.css';
import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';
import { useEffect, useState } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Url from '../Services/httpApi'

ChartJS.register(

    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend

);









var data = {
    labels: ['0h', '0h15', '0h15', '0h45', '1h', '1h15', '1h30', '1h45', '2h', '2h15', '2h30', '2h45', '3h', '3h15', '3h30', '3h45', '4h', '4h15', '4h30', '4h45', '5h', '5h15', '5h30', '5h45', '6h', '6h15', '6h30', '6h45', '7h', '7h15', '7h30', '7h45', '8h', '8h15', '8h30', '8h45', '9h', '9h15', '9h30', '9h45', '10h', '10h15', '10h30', '10h45', '11h', '11h15', '11h30', '11h45', '12h', '12h15', '12h30', '12h45', '13h', '13h15', '13h30', '13h45', '14h', '14h15', '14h30', '14h45', '15h', '15h15', '15h30', '15h45', '16h', '16h15', '16h30', '16h45', '17h', '17h15', '17h30', '17h45', '18h', '18h15', '18h30', '18h45', '19h', '19h15', '19h30', '19h45', '20h', '20h15', '20h30', '20h45', '21h', '21h15', '21h30', '21h45', '22h', '22h15', '22h30', '22h45', '23h', '23h15', '23h30', '23h45'],
    datasets: [{
        label: 'Fase 1',
        data:['1.246', '0.178', '2.143', '1.228', '2.143', '0.189', '2.206', '2.165', '0.227', '1.62', '2.58', '2.149', '1.31', '0.30', '0.305', '2.293', '0.74', '0.134', '2.205', '2.147', '2.195', '1.280', '0.204', '1.185', '34.60', '22.181', '31.79', '33.198', '6.191', '9.162', '5.242', '6.203', '6.263', '8.188', '7.298', '6.238', '8.218', '6.103', '9.100', '6.35', '9.278', '7.50', '5.26', '9.210', '8.178', '9.134', '8.152', '5.50', '5.241', '6.270', '7.286', '7.98', '9.41', '9.257', '9.199', '7.23', '5.214', '9.34', '7.74', '5.301', '8.217', '8.161', '6.162', '9.166', '7.225', '9.198', '5.1', '6.32', '5.282', '7.244', '9.124', '6.181', '21.313', '28.57', '30.43', '33.311', '8.9', '5.18', '6.43', '8.283', '1.236', '1.4', '2.231', '1.71', '2.55', '2.111', '2.120', '0.262', '2.172', '2.261', '0.47', '0.131', '2.44', '2.21', '2.187', '2.179']
        ,

        backgroundColor: [
            'rgba(187, 39, 245, 0.2)',


        ],
        borderColor: [
            'rgba(187, 39, 245, 1)',

        ],
        borderWidth: 2
    },

    {
        label: 'Fase 2 ',
        data:['1.102', '1.264', '0.93', '2.293', '2.243', '2.118', '1.74', '2.75', '2.177', '1.17', '2.171', '2.31', '1.292', '1.48', '0.305', '1.15', '2.110', '0.130', '0.310', '2.175', '2.227', '1.84', '2.172', '1.130', '25.191', '34.224', '30.142', '28.2', '5.197', '7.188', '5.72', '9.1', '9.26', '5.280', '9.265', '7.226', '6.173', '8.46', '9.238', '9.10', '7.211', '7.28', '6.310', '7.90', '5.321', '7.95', '8.120', '9.71', '6.78', '7.295', '9.295', '7.26', '8.56', '5.254', '7.69', '6.1', '6.37', '5.101', '5.12', '6.62', '6.50', '6.290', '7.64', '5.211', '9.297', '8.301', '6.49', '9.186', '8.309', '8.189', '7.83', '5.114', '24.260', '30.23', '34.193', '28.64', '7.211', '5.198', '8.144', '9.129', '0.194', '0.311', '1.128', '1.60', '1.188', '2.205', '0.16', '1.85', '0.293', '0.238', '2.128', '2.296', '0.127', '2.115', '0.244', '2.242']

        ,


        backgroundColor: [

            'rgba(54, 162, 235, 0.2)',


        ],
        borderColor: [

            'rgba(54, 162, 235, 1)',


        ],
        borderWidth: 2
    },











    ]
};

var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
        labels: {
            fontSize: 25,
        },
    },
    legend: {
        labels: {
            fontSize: 26
        }
    }
}




const DashBoard = () => {
    let [fase1, setFase1] = useState('')
    let [fase2, setFase2] = useState('')
    return (

        <div>
            <div className='index'>
                <div className='sideMenu'> <SideMenu></SideMenu></div>
                <div className='container'>
                    <h1 className='title'>Dashboard - Consumo elétrico residencial, monitorar para economizar.
                    </h1>
                    <div>
                        <div className='charts'>
                            <div className='barchart'>  <Line
                                data={data}
                                options={options}
                                height={400}


                            /></div>
                            <div className="container"><div><label htmlFor="datas">Selecione o Dia</label></div>
                                <div><input type="date" name="datas" id="" /></div></div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DashBoard;
