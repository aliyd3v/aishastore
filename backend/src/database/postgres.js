const postgres = require('pg')
const { DB_PORT, DB_HOST, DB_USERNAME, DB_PASS, DB_DATABASE } = require('../config/config')

const pg = new postgres.Client({
    port: DB_PORT,
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASS,
    database: DB_DATABASE
})

pg.connect((err) => {
    if (err) console.error(err)
    else console.log('PostgreSQL is connected')
})

module.exports = pg