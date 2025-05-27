require('dotenv').config()

// PORT.
exports.PORT = process.env.PORT || 3000

// Crypto config.
exports.ALGORITHM = process.env.ALGORITHM
exports.CRYPTO_KEY = process.env.CRYPTO_KEY

// PostgreSQL (local) config.
exports.DB_PORT = process.env.DB_PORT
exports.DB_HOST = process.env.DB_HOST
exports.DB_USERNAME = process.env.DB_USERNAME
exports.DB_PASS = process.env.DB_PASS
exports.DB_DATABASE = process.env.DB_DATABASE

// Supabase postgres (serverless) config.
exports.DATABASE_URL = process.env.DATABASE_URL

// TOKEN_TIME.
exports.TOKEN_TIME = process.env.TOKEN_TIME

// S3CLIENT CONFIG.
exports.S3CLIENT_ACCESS_KEY_ID = process.env.S3CLIENT_ACCESS_KEY_ID
exports.S3CLIENT_SECRET_ACCESS_KEY = process.env.S3CLIENT_SECRET_ACCESS_KEY
exports.S3CLIENT_BUCKET_NAME = process.env.S3CLIENT_BUCKET_NAME
exports.S3CLIENT_REGION = process.env.S3CLIENT_REGION
exports.S3CLIENT_ENDPOINT = process.env.S3CLIENT_ENDPOINT
exports.SUPABASE_PROJECT_ID = process.env.SUPABASE_PROJECT_ID