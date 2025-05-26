const Category = require('../../controller/category/category')
const router = require('express').Router()

router
    .route('/')
    .post(Category.create)      // Create a category.
    .get(Category.getAll)       // Get all categories.

router
    .route('/:id')
    .get(Category.getOne)       // Get a category.
    .put(Category.updateOne)    // Update category.
    .delete(Category.deleteOne) // Delete a category.


module.exports = router