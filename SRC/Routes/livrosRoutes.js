const express = require("express");
const router = express.Router();
const livroController = require("../Controllers/livroController");

router.get("/", livroController.buscarTodos);

router.get("/:id", livroController.buscarPorId);

router.post("/", livroController.criarLivro);

router.put("/:id", livroController.atualizarLivro);

router.delete("/:id", livroController.deletarLivro);

module.exports = router;
