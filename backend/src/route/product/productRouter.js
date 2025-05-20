const Product = require('../../controller/product/product.js')

const router = require('express').Router()

// Product route.
router
    .route('/')
    .post(Product.create)           // Create a product.
    .get(Product.getAll)            // Get all products and product items.

router
    .route('/:id')
    .get(Product.getOne)            // Get a product with all product items this product.
    .put(Product.updateOne)         // Update a product.
    .delete(Product.deleteOne)      // Deletea a product.

    // Product item route.
    .post(Product.createItem)       // Create a product item.

router
    .route('/:id/:id1')
    .get(Product.getOneItem)        // Get a product item.
    .put(Product.updateOneItem)     // Update a product item.
    .delete(Product.deleteOneItem)  // Delete a product item.

module.exports = router