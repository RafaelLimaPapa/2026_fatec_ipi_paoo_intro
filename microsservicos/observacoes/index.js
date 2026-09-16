const axios = require('axios')
const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

/*
{
    1: [
        {
            id: 1001,
            texto: 'Comprar café',
            lembreteId: 1
        },
        {
            id: 1002,
            texto: 'ir à feira',
            lembreteId: 1
        }
    ]
    2: [
        {
            id: 2001,
            texto: 'Cozinhar macarrão',
            lembreteId: 2
        }    
    3: [

    ]
    
}
*/
const observacoes = {}
//POST /lembretes/1/observações
//path 
app.post('/lembretes/:id/observacoes', async (req, res) => {
    const idObs = uuidv4()
    //const texto = req.body.texto
    const { texto } = req.body
    const observacao = {
        id: idObs,
        texto: texto,
        lembreteId: req.params.id
    }
    //construir o eventos de criação de observação
    // app.post('/observacoes', (req,res) => {
    //     const observacao = req.body
    //     console.log(observacao)
    //     res.end()
    // })
    const observacoesDoLembrete = observacoes[req.params.id] || []
    observacoesDoLembrete.push(observacao)
    observacoes[req.params.id] = observacoesDoLembrete
    await axios.post(
        "http://localhost:10000/eventos", {
            tipo: 'ObservacaoCriada',
            dados: observacao
        }
    )

    res.json(observacoesDoLembrete)
})

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.json(observacoes[req.params.id] || [])
})

app.post('/eventos', (req,res) => {
    const evento= req.body
    console.log(evento)
    res.end()
})


const port = 5000
app.listen(5000, () => {console.log(`Observações. Porta ${port}.`)})