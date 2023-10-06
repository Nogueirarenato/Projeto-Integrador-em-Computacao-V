const express = require("express"); // importando o módulo express para criação de rotas
const app = express();
const connection = require("./database/database");
const Drives = require("./drives/Drives");
const cors = require('cors');
const bodyParser = require("body-parser");

const port = process.env.PORT_APP || 21044;
//app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


// var corsOptions = {
//     origin:'*', 

// }

const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsOptions))

connection.authenticate().then(() => {
    console.log("Conexão efetuada com sucesso...")
}).catch((error) => {
    console.log("Ohhh não... alguma coisa deu errado!!! " + error)
});


app.post("/api/Drives", (req, res) => {


    var body = req.body;
    var id_button = parseInt(req.body.id_button);
    //var temperature = parseFloat(Math.random() * 20).toFixed(1);
    var temperature = parseFloat(req.body.temperature).toFixed(1);
    console.log(body);
    console.log(req.body.temperature);


    Drives.create(
        {
            id_button: id_button,
            temperature: temperature,
            tgr: true
        }
    ).then(
        () => {
            console.log("Acionamento registrado")
            console.log(req.body.temperature);
        }
    ).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.log("Deu erro...")
        res.sendStatus(400);
        console.log(err)
    })




})

app.get("/api/Drives", (req, res) => {
    Drives.findAll().then(drives => {

        res.json(drives)
    }).then(console.log("Listando acionamentos")).catch(() => {
        console.log("Erro 03")
        res.sendStatus(400)
    })

})





app.listen(port, () => {
    console.log(`
Rodando...
Este projeto foi desenvolvido em Node.js em abril de 2023
Autor: Renato Nogueira
`

    );
})


