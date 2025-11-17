const connection = require ('../Config/db');

const usuarioModel = {
    buscarTodos: (callback) => {
        const sql = 'SELECT * FROM usuarios';
        connection.query(sql, callback);
    },

    buscarPorId: (id, callback) => {
        const sql = 'SELECT * FROM usuarios WHERE id = ?';
        connection.query(sql, [id], callback);
    },

    criarUsuario: (dados, callback) => {
            const sql = "INSERT INTO Usuarios (nome, matricula, tipo) VALUES (?, ?, ?)";
            connection.query(sql, [dados.nome, dados.matricula, dados.tipo]);
    }
};

module.exports = usuarioModel;