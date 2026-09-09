const express = require('express')
const app = express()
//middleware
app.use(express.json())
/*
{
    1: {
        id: 1,
        texto: 'fazer café'
        },
    2: {
        id: 2,
        texto: 'Ir à festa'
    }
}
*/
           
           
let id = 1
const lembretes = {}

//API: appliecation Programming Interface: coleção de endpoints

//criar um lembrete 
/*ENDPOINT: uma tripla: método do protocolo HTTP, padrão de acesso e funcionalidade*/
//POST /lembretes
app.post("/lembretes", (req, res) => {
    // { texto: "Fazer café" }
    const texto = req.body.texto
    lembretes[id] = {
        id: id,
        texto: texto
    }
    id++
    res.json({mensagem: 'ok'})
})
//GET / lembretes
app.get("/lembretes", function(req, res){
    res.json(lembretes)
})
const port = 4000
app.listen(port, () => console.log(`Lembretes.${port}.`))