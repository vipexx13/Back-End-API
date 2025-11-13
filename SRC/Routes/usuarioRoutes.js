const express = require('express');
const connection = require("../Config/db");
const router = express.Router();

router.get('/',(req, res) => {
    const sql = 'SELECT * FROM usuarios';
    connection.query(sql, (err, result) => {
        if (err) {
            console.error("Erro ao buscar usuarios: ", err);
            return res.status(500).json({erro: "Erro ao buscar usuarios"});
        }
        res.json(result);
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM usuarios WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Erro ao buscar usuarios pelo ID: ", err);
            return  res.status(500).json({error: "Erro ao buscar usuarios pelo ID"});
        }

        if (result.length === 0) {
            return res.status(404).json({error: "Usuario não encontrado"});
        }

        res.json(result[0]);
    })
})

module.exports = router;