const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.jdin(__dirname, "tamplates")

app.get('/', (requisicao, reposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})