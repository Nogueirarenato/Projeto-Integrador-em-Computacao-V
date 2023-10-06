import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Url from '../Services/httpApi'

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
   
    Title,
    Tooltip,
    Legend
);







//////





const DoughnutChart = () => {

    let [janeiro1, setJaneiro1] = useState(0);
    let [fevereiro1, setFevereiro1] = useState(0);
    let [marco1, setMarco1] = useState(0);
    let [abril1, setAbril1] = useState(0);
    let [maio1, setMaio1] = useState(0);
    let [junho1, setJunho1] = useState(0);
    let [julho1, setJulho1] = useState(0);
    let [agosto1, setAgosto1] = useState(0);
    let [setembro1, setSetembro1] = useState(0);
    let [outubro1, setOutubro1] = useState(0);
    let [novembro1, setNovembro1] = useState(0);
    let [dezembro1, setDezembro1] = useState(0);

    let [janeiro2, setJaneiro2] = useState(0);
    let [fevereiro2, setFevereiro2] = useState(0);
    let [marco2, setMarco2] = useState(0);
    let [abril2, setAbril2] = useState(0);
    let [maio2, setMaio2] = useState(0);
    let [junho2, setJunho2] = useState(0);
    let [julho2, setJulho2] = useState(0);
    let [agosto2, setAgosto2] = useState(0);
    let [setembro2, setSetembro2] = useState(0);
    let [outubro2, setOutubro2] = useState(0);
    let [novembro2, setNovembro2] = useState(0);
    let [dezembro2, setDezembro2] = useState(0);

    let [janeiro3, setJaneiro3] = useState(0);
    let [fevereiro3, setFevereiro3] = useState(0);
    let [marco3, setMarco3] = useState(0);
    let [abril3, setAbril3] = useState(0);
    let [maio3, setMaio3] = useState(0);
    let [junho3, setJunho3] = useState(0);
    let [julho3, setJulho3] = useState(0);
    let [agosto3, setAgosto3] = useState(0);
    let [setembro3, setSetembro3] = useState(0);
    let [outubro3, setOutubro3] = useState(0);
    let [novembro3, setNovembro3] = useState(0);
    let [dezembro3, setDezembro3] = useState(0);


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
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '1') && (element.id_button === 1)) setJaneiro1(janeiro1++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '2') && (element.id_button === 1)) setFevereiro1(fevereiro1++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '3') && (element.id_button === 1)) setMarco1(marco1++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '4') && (element.id_button === 1)) setAbril1(abril1++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '5') && (element.id_button === 1)) setMaio1(maio1++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '6') && (element.id_button === 1)) setJunho1(junho1++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '7') && (element.id_button === 1)) setJulho1(julho1++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '8') && (element.id_button === 1)) setAgosto1(agosto1++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '9') && (element.id_button === 1)) setSetembro1(setembro1++);
                            if ((element.createdAt[5] === '1') && (element.createdAt[6] === '0') && (element.id_button === 1)) setOutubro1(outubro1++);
                            if ((element.createdAt[5] === '1') && (element.createdAt[6] === '1') && (element.id_button === 1)) setNovembro1(novembro1++);
                            if ((element.createdAt[5] === '1') && (element.createdAt[6] === '2') && (element.id_button === 1)) setDezembro1(dezembro1++);


                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '1') && (element.id_button === 2)) setJaneiro2(janeiro2++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '2') && (element.id_button === 2)) setFevereiro2(fevereiro2++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '3') && (element.id_button === 2)) setMarco2(marco2++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '4') && (element.id_button === 2)) setAbril2(abril2++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '5') && (element.id_button === 2)) setMaio2(maio2++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '6') && (element.id_button === 2)) setJunho2(junho2++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '7') && (element.id_button === 2)) setJulho2(julho2++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '8') && (element.id_button === 2)) setAgosto2(agosto2++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '9') && (element.id_button === 2)) setSetembro2(setembro2++);
                            if ((element.createdAt[5] === '1') && (element.createdAt[6] === '0') && (element.id_button === 2)) setOutubro2(outubro2++);
                            if ((element.createdAt[5] === '1') && (element.createdAt[6] === '1') && (element.id_button === 2)) setNovembro2(novembro2++);
                            if ((element.createdAt[5] === '1') && (element.createdAt[6] === '2') && (element.id_button === 2)) setDezembro2(dezembro2++);


                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '1') && (element.id_button === 3)) setJaneiro3(janeiro3++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '2') && (element.id_button === 3)) setFevereiro3(fevereiro3++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '3') && (element.id_button === 3)) setMarco3(marco3++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '4') && (element.id_button === 3)) setAbril3(abril3++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '5') && (element.id_button === 3)) setMaio3(maio3++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '6') && (element.id_button === 3)) setJunho3(junho3++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '7') && (element.id_button === 3)) setJulho3(julho3++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '8') && (element.id_button === 3)) setAgosto3(agosto3++);
                            if ((element.createdAt[5] === '0') && (element.createdAt[6] === '9') && (element.id_button === 3)) setSetembro3(setembro3++);
                            if ((element.createdAt[5] === '1') && (element.createdAt[6] === '0') && (element.id_button === 3)) setOutubro3(outubro3++);
                            if ((element.createdAt[5] === '1') && (element.createdAt[6] === '1') && (element.id_button === 3)) setNovembro3(novembro3++);
                            if ((element.createdAt[5] === '1') && (element.createdAt[6] === '2') && (element.id_button === 3)) setDezembro3(dezembro3++);


                        });

                    })
                    .catch(erro => console.log(erro))
            }
            fecthData()
        }, []


    )


    var data = {
        labels: ['Dispositivo 1', 'Dispositivo 2', 'Dispositivo 3'],
        datasets: [{
            label: 'Quantidade de Acionamentos dispositivo 1 ',
            data:  [
                ((janeiro1 )+ (fevereiro1 )+ (marco1 )+ (abril1 )+ (maio1 )+ (junho1 )+ (julho1 )+ (agosto1 )+ (setembro1 )+ (outubro1 )+ (novembro1 )+ (dezembro1 )),
                ((janeiro2 )+ (fevereiro2 )+ (marco2 )+ (abril2 )+ (maio2 )+ (junho2 )+ (julho2 )+ (agosto2 )+ (setembro2 )+ (outubro2 )+ (novembro2 )+ (dezembro2 )),
                ((janeiro3 )+ (fevereiro3 )+ (marco3 )+ (abril3 )+ (maio3 )+ (junho3 )+ (julho3 )+ (agosto3 )+ (setembro3 )+ (outubro3 )+ (novembro3 )+ (dezembro3 )),],
                
                
            backgroundColor: [
                'rgba(187, 39, 245, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'


            ],
            borderColor: [
                'rgba(187, 39, 245, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'

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



    return (
        <div>
            <Doughnut
                data={data}
                options={options}
                height={400}


            />
        </div>
    )
}

export default DoughnutChart