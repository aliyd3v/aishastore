const router = require('express').Router()
const authController = require('../../controller/auth/auth.js')
const User = require('../../controller/user/user.js')

router
    .route('/')
    .post(authController.identification, authController.authorization('Admin'), User.create)
    .get(authController.identification, authController.authorization('Admin'), User.getAll)

router
    .route('/:id')
    .get(authController.identification, authController.authorization('Admin'), User.getOne)
    .put(authController.identification, authController.authorization('Admin'), User.updateOne)
    .patch(authController.identification, authController.authorization('Admin'), User.updatePassword)
    .delete(authController.identification, authController.authorization('Admin'), User.deleteOne)

module.exports = router