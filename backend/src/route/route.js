const userRouter = require('./user/userRouter.js')
const authRouter = require('./auth/authRouter.js')
const productRouter = require('./product/productRouter.js')
const globalErrorHandler = require('../controller/error/globalErrorHandler.js')
const routeHandler = require('../controller/error/routeHandler.js')
const categoryRouter = require('../route/category/categoryRouter.js')

const appRouter = app => {
    // Root route.
    app.get('/', (req, res) => res.status(200).json({ message: 'Hello, I\'am server!' }))

    // Setup main routes.
    app.use('/', authRouter)
    app.use('/user', userRouter)
    app.use('/category', categoryRouter)
    app.use('/product', productRouter)

    // Setup error handlers.
    app.use(routeHandler)
    app.use(globalErrorHandler)
}

module.exports = appRouter