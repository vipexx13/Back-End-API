const express = require('express');
const connection = require("../Config/db");
const router = express.Router();
const usuarioController = require("../Controllers/usuarioController");

router.get("/", usuarioController.buscarTodos);
router.get("/:id", usuarioController.buscarPorId);
router.get("/", usuarioController.criarUsuario);

module.exports = router;