const pg = require("../../database/postgres");

const category = {
    createOne: async (title, active) => {
        return await pg.query(
            `INSERT INTO categories (title, active) VALUES ($1, $2) RETURNING id, title, active, createdAt;`,
            [title, active]
        )
    },
    getOneByTitle: async title => {
        return await pg.query(
            `SELECT id, title, active, createdAt, updatedAt FROM categories WHERE title = $1;`,
            [title]
        )
    },
    getOneById: async id => {
        return await pg.query(
            `SELECT id, title, active, createdAt, updatedAt FROM categories WHERE id = $1;`,
            [id]
        )
    },
    getAll: async () => {
        return await pg.query(
            `SELECT id, title, active, createdAt, updatedAt FROM categories;`
        )
    },
    getAllWithProducts: async () => {
        return null
    },
    updateOne: async (title, active, id) => {
        return pg.query(
            `UPDATE users SET title = $1, active = $2, updatedAt = CURRENT_TIMESTAMP WHERE id = $3
                RETURNING id, title, active, createdAt, updatedAt;`,
            [title, active, id]
        )
    },
    deleteOne: async id => {
        return pg.query(`DELETE FROM categories WHERE id = $1`, [id])
    }
}

module.exports = category