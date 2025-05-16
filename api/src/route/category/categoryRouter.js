const Category = require('../../controller/category/category')
const router = require('express').Router()

router
    .route('/')
    .post(Category.create)
    .get(Category.getAll)

router
    .route('/:id')
    .get(Category.getOne)
    .put(Category.updateOne)
    .delete(Category.deleteOne)


module.exports = router