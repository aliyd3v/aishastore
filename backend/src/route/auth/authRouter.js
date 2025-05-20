const authController = require('../../controller/auth/auth')

const router = require('express').Router()

router
    .post('/login', authController.authentication)

module.exports = router