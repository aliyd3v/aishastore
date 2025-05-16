require('dotenv').config()

// PORT.
exports.PORT = process.env.PORT || 3000

// Crypto config.
exports.ALGORITHM = process.env.ALGORITHM
exports.CRYPTO_KEY = process.env.CRYPTO_KEY

// PostgreSQL config.
exports.DB_PORT = process.env.DB_PORT
exports.DB_HOST = process.env.DB_HOST
exports.DB_USERNAME = process.env.DB_USERNAME
exports.DB_PASS = process.env.DB_PASS
exports.DB_DATABASE = process.env.DB_DATABASE

// TOKEN_TIME.
exports.TOKEN_TIME = process.env.TOKEN_TIME