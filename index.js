const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "tamplates")

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.post('/cadastrar/salvar', (requisicao, reposta) => {
    const name = requisicao.body.nome
    const email = requisicao.body.email
    const senha = requisicao.body.senha

    console.log(`O email do usuario é: ${email}`)
})

app.get('/cadastrar', (requisicao, reposta) => {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})

app.get('/usuarios/:id', (requisicao, reposta) => {
    const id = requisicao.parans.id

    console.log(`acessando dados do usuário ${id}`)

    reposta.sandFile(`${caminhoBase}/usuario.html`)
})

app.get('/', (requisicao, reposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})