const express = require ("express")

const { Agendamentos } = require("./banco.js")

const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function (req, res){
    res.end("Seja bem-vindo ao node JS.")
})

app.get("/cadastrar", function (req, res) {
    const { nome, endereco, bairro, cep, cidade, estado, observacao } = req.query;

    Agendamentos.create({
        nome,
        endereco,
        bairro,
        cep,
        cidade,
        estado,
        observacao
    })
});