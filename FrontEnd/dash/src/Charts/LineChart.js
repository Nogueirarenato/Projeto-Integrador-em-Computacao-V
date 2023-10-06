import React, { useEffect, useState } from "react";
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







//////





const LineChart = () => {

   


    useEffect(
        () => {
            const fecthData = async () => {
                await fetch(Url, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
                ).then(response => response.json()


                ).then(response => {

                    return response;
                }).then(response => response)
                    .then(response => {

                        console.log(response)
                        response.forEach(element => {
                           


                        });

                    })
                    .catch(erro => console.log(erro))
            }
            fecthData()
        }, []


    )


    var data = {
        labels: ['0h', '1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h','0h',],
        datasets: [{
            label: 'Fase 1',
            data: ['3','2','4','1','6','7','2','5','1','1','7','1','5','5','4','2','8','8','4','9','0','4','7','1','0' ],

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
            data: ['1','1','4','3','3','2','1','3','4','5','9','7','2','9','8','1','6','7','5','8','6','1','2','2','0' ],
            

            backgroundColor: [

                'rgba(54, 162, 235, 0.2)',


            ],
            borderColor: [

                'rgba(54, 162, 235, 1)',


            ],
            borderWidth: 2
        },

        {
            label: 'Fase 3',
            
            data: [],
            backgroundColor: [

                'rgba(255, 206, 86, 0.2)',

            ],
            borderColor: [

                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 2
            ,
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



    return (
        <div>
            <Line
                data={data}
                options={options}
                height={400}


            />
        </div>
    )
}

export default LineChart