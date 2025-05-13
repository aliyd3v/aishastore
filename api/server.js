const express = require('express')
const cors = require('cors')
const appRouter = require('./src/route/route.js')

// Setup application.
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Setup router.
appRouter(app)
require('./src/database/postgres.js')

// Setup listening port.
app.listen(3000, () => console.log('Listening on port ' + 3000))