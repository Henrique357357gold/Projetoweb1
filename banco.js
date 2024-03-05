const Sequelize = require("sequelize")
const sequelize = new Sequelize ("exemplo", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})

const Agendamentos = sequelize.define("agendamentos", {
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.TEXT
    },
})

//Agendamentos.sync({force: true})
Agendamentos.create({
    nome: "Henrique da Silva Machado",
    endereco: "Av Aguia de Haia",
    bairro: "AE carvalho",
    cep: "08411190",
    cidade: "São Paulo",
    estado: "SP",
    observacao: "Realizar os serviços de alimento e balanceamento do meu veículo"
})

module.exports = { Agendamentos, sequelize };