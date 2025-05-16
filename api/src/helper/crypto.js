const crypto = require('node:crypto')
const { ALGORITHM, CRYPTO_KEY } = require('../config/config')

const cryptoManager = {
    token: {
        generate: payload => {
            const string = (new URLSearchParams(payload)).toString()
            const iv = crypto.randomBytes(8).toString('hex')
            const cipher = crypto.createCipheriv(ALGORITHM, CRYPTO_KEY, iv)
            let encrypted = cipher.update(string, 'utf-8', 'hex')
            encrypted += cipher.final('hex')
            return encrypted + ':' + iv
        },
        verify: token => {
            try {
                const [encrtypted, iv] = token.split(':')
                const decipher = crypto.createDecipheriv(ALGORITHM, CRYPTO_KEY, iv)
                let decrypt = decipher.update(encrtypted, 'hex', 'utf-8')
                decrypt += decipher.final('utf-8')
                return Object.fromEntries(new URLSearchParams(decrypt))
            } catch (error) {
                return undefined
            }
        }
    },
    pass: {
        hash: async (password, salt) => {
            return new Promise((resolve, reject) => {
                salt = salt || crypto.randomBytes(8).toString('hex')
                crypto.scrypt(password, salt, 32, (err, derivedKey) => {
                    if (err) reject(err)
                    else resolve(derivedKey.toString('hex') + ':' + salt)
                })
            })
        },
        verify: async (password, hash) => {
            const hashed = await cryptoManager.pass.hash(password, hash.split(':')[1])
            return hashed === hash
        }
    }
}

module.exports = cryptoManager