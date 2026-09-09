//exibir todas as previsoes do tempo para itu com async await
const axios = require('axios')
const appid = process.env.APPID
const q = "Itu"
const units = "metric" //graus celsius
const lang = "pt-BR"
const cnt = 1
const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${appid}&q=${q}&units=${units}&lang=${lang}&cnt=${cnt}`
console.log(url)

const previsoesDoTempo = async () => {
    const previsoes = ((await axios.get(url)).data.list
    for(let previsao of previsoes)
)
}

// //require('dotenv').config()
// const axios = require('axios')
// const appid = process.env.APPID
// const q = "Itu"
// const units = "metric" //graus celsius
// const lang = "pt-BR"
// const cnt = 1
// const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${appid}&q=${q}&units=${units}&lang=${lang}&cnt=${cnt}`
// console.log(url)

// axios.get(url)
// .then(res => {
//     console.log(res.data)
//     console.log("**********************")
//     return res.data.list
// })
// .then( (previsoes) => {
//     for (let previsao of previsoes){
//         console.log(`
//             ${new Date(+(previsao.dt) * 1000).toLocaleString()},
//             Min: ${previsao.main.temp_min}\u00B0C
//             Max: ${previsao.main.temp_max}\u00B0C
//             Hum: ${previsao.main.humidity}%
//             Descrição: ${previsao.weather[0].description}
//             Sensação térmica: ${previsao.main.feels_like}\u00B0C
//         `)
//     }
//     return previsoes
// })
// .then( (temperatura) => {
//     let contagem = 0
//     for(let previsao of temperatura){
//         if(previsao.main.feels_like > 20) contagem++;
//     }
//     console.log("Contagem de previsões maiores que 20: " + contagem + " previsão")
// })//complete com uma função dentro do then
// //nessa funcao, diga quantas previsoes tem a sensação 
// //termica maior ou igual a 20
// .catch(res => console.log(res))