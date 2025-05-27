const pg = require('../../database/postgres.js')

const image = {
    createProductItemImage: async (fileName, publicUrl, productItemId) => {
        return await pg.query(
            `INSERT INTO images (fileName, publicUrl, productItemId)
            VALUES ($1, $2, $3)
            RETURNING id, fileName, publicUrl, productItemId, createdAt;`,
            [fileName, publicUrl, productItemId]
        )
    },
    getOneById: async id => {
        return pg.query(
            `SELECT id, fileName, publicUrl, productItemId, createdAt FROM images WHERE id = $1;`,
            [id]
        )
    },
    deleteProductItemImage: async id => {
        await pg.query(
            `DELETE FROM images WHERE id = $1;`,
            [id]
        )
    }
}

module.exports = image