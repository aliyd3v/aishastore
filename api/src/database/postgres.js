const postgres = require('pg')

const pg = new postgres.Client({
    port: 5432,
    host: 'localhost',
    username: 'ali',
    password: 'root',
    database: 'aishastore'
})

pg.connect((err) => {
    if (err) console.error(err)
    else console.log('PostgreSQL is connected')
})

module.exports = pg