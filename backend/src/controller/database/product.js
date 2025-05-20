const pg = require('../../database/postgres.js')

const product = {
    createOneProduct: async (title, description, price, categoryId, active) => {
        return await pg.query(
            `INSERT INTO products (title, description, price, categoryId, active)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, title, description, price, categoryId, discount, active, createdAt;`,
            [title, description, price, categoryId, active]
        )
    },
    createOneProductItem: async (productId, color, size, amount, active) => {
        return await pg.query(
            `INSERT INTO product_items (productId, color, size, amount, active)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, productId, color, size, amount, active, createdAt;`,
            [productId, color, size, amount, active]
        )
    },
    getOneProductById: async id => {
        return await pg.query(
            `SELECT id, title, description, price, categoryId, discount, active, createdAt, updatedAt FROM products WHERE id = $1;`,
            [id]
        )
    },
    getOneProductItemById: async id => {
        return await pg.query(
            `SELECT id, productId, color, size, amount, active, createdAt, updatedAt FROM product_items WHERE id = $1;`,
            [id]
        )
    }
}