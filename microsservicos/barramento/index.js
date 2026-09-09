const axios = require('axios')
const express = require('express')
const app = express()

app.use(express.json())
app.post('/evento', (req, res) => {
    const evento = req.body
    axios.post('http://localhost:4000/eventos', evento)
    axios.post('http://localhost:5000/eventos', evento)
    res.end()
})
const port = 10000
app.listen(port, () => console.log(`Barramento. ${port}`))