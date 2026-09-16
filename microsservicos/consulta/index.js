const express = require('express')
const app = express()
app.use(express.json())

const baseConsulta = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.id]
    },
    ObservacaoCriada: (observacao) => {
        const observacoes = baseConsulta[observacao.LembreteId]['observacoes'] || []
        observacoes.push(observacao)
        baseConsulta[observacao.LembreteId]['observacoes'] = observacoes
    }
}

//GET /lembretes 
app.get('/lembretes', (req,res) => {
    res.json(baseConsulta)
})
//POST /eventos
app.post('/eventos', (req,res) => {
    const evento = req.body
    console.log(evento)
    funcoes(evento.tipo)(evento.dados)
})
