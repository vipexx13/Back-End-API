const usuarioModel = require("../Models/usuarioModel");

const usuarioController = {
    buscarTodos: (req, res) => {
        usuarioModel.buscarTodos((err, result) => {
            if (err) {
                console.error("Erro ao buscar usuários:", err);
                return res.status(500).json({ erro: "Erro ao buscar usuários" });
            }

            res.json(result);
        });
    },

    buscarPorId: (req, res) => {
        const { id } = req.params;

        usuarioModel.buscarPorId(id, (err, result) => {
            if (err) {
                console.error("Erro ao buscar usuário pelo ID:", err);
                return res.status(500).json({ erro: "Erro ao buscar usuário pelo ID" });
            }

            if (result.length === 0) {
                return res.status(404).json({ erro: "Usuário não encontrado!" });
            }

            res.json(result[0]);
        });
    },

    criarUsuario: (req, res) => {
        const dados = req.body;

        usuarioModel.criarUsuario(dados, (err, result) => {
            if (err) {
                console.error("Erro ao Adicionar um novo Usuário:", err);
                return res.status(500).json({erro: "Erro ao Adicionar um novo Usuário: "});
            }

            res.status(201).json({mensagem: "Usuário Adicionado com sucesso!", id: result.insertId });
        });
    }
};

module.exports = usuarioController;