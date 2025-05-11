const userRouter = require('./user/userRouter.js')
const authRouter = require('./auth/authRouter.js')
const productRouter = require('./product/productRouter.js')

const appRouter = app => {
    app.use('/user', userRouter)
    app.use('/auth', authRouter)
    app.use('/product', productRouter)
}

module.exports = appRouter