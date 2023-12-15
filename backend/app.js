const express = require('express')
const cors = require ("cors")
const app = express()

app.use(cors())

app.use(express.json())

//conexão banco de dados 
const conn = require("./db/conn");

conn();

//routes

const routes = require("./routes/userRoutes")

//configuração para as rotas estarem na aplicação
app.use('/api', routes)

app.listen(3000, function(){
    console.log("servidor Online!")
})