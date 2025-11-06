// Bibliotecas necessárias
const express = require ("express");
const cors = require ("cors");

// Criação do servidor Express
const app = express();

// Definição da porta do Servidor
const port = 3000;

// Configuração do Express
app.use(express.json());

// Configuração do CORS
app.use(cors());

