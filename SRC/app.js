const express = require('express');

const cors = require('cors');

const app = express();

const usuarioRouter = require('./Routes/usuarioRoutes');

require("./Config/db");

app.use(express.json());

app.use(cors());

app.use("/usuario", usuarioRouter);


app.get('/', (req, res) => {
    res.send("Servidor e DataBase rodando com sucesso!");
});

module.exports = app;
