const Product = require('../../controller/product/product.js')

const router = require('express').Router()

// Product route.
router
    .route('/')
    .post(Product.create)
    .get(Product.getAll)

router
    .route('/:id')
    .get(Product.getOne)        // Here will be get all product items.
    .put(Product.updateOne)
    .delete(Product.deleteOne)

    // Product item route.
    .post(Product.createItem)

router
    .route('/:id/:id1')
    .get(Product.getOneItem)
    .put(Product.updateOneItem)
    .delete(Product.deleteOneItem)

module.exports = router