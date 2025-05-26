const pg = require('../../database/postgres.js')

const image = {
    createProductItemImage: async (fileName, url, productItemId) => {
        return await pg.query(
            `INSERT INTO images (name, url, productItemId)
            VALUES ($1, $2, $3)
            RETURNING id, name, url, productItemId, createdAt;`,
            [fileName, url, productItemId]
        )
    },
    deleteProductItemImage: async id => {
        return await pg.query(
            ``,
            []
        )
    }
}

module.exports = image