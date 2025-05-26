const pg = require("../../database/postgres");

const user = {
    createOne: async (name, username, password, role) => {
        return await pg.query(
            `INSERT INTO users (name, username, password, role)
                VALUES ($1, $2, $3, $4)
                RETURNING id, name, username, role, createdAt;`,
            [name, username, password, role]
        )
    },
    getOneById: async id => {
        return await pg.query(
            `SELECT id, name, username, role, createdAt, updatedAt FROM users WHERE id = $1;`,
            [id]
        )
    },
    getOneWithPassByUsername: async (username) => {
        return await pg.query(
            `SELECT id, name, username, password, role, createdAt, updatedAt FROM users WHERE username = $1;`,
            [username]
        )
    },
    getOneByUsername: async (username) => {
        return await pg.query(
            `SELECT id, name, username, role, createdAt, updatedAt FROM users WHERE username = $1;`,
            [username]
        )
    },
    getAll: async () => {
        return await pg.query(
            `SELECT id, name, username, role, createdAt, updatedAt
                FROM users ORDER BY username;`
        )
    },
    updateOne: async (name, username, role, phone, email, id) => {
        return await pg.query(
            `UPDATE users SET name = $1, username = $2, role = $3, phone = $4, email = $5, updatedAt = CURRENT_TIMESTAMP
                WHERE id = $6 RETURNING id, name, username, role, phone, email, createdAt, updatedAt;`,
            [name, username, role, phone, email, id]
        )
    },
    updatePass: async (password, id) => {
        return await pg.query(
            `UPDATE users SET password = $1 WHERE id = $2;`,
            [password, id]
        )
    },
    deleteOne: async (id) => {
        return await pg.query(
            `DELETE FROM users WHERE id = $1;`,
            [id]
        )
    }
}

module.exports = user