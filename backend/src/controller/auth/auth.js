const AppError = require('../../util/appError.js')
const authentificationValidate = require('../../util/validate/auth/authentificationValidate.js')
const pg = require('../../database/postgres.js')
const cryptoManager = require('../../helper/crypto.js')
const { TOKEN_TIME } = require('../../config/config.js')
const userDB = require('../database/user.js')

const authController = {
    authentication: async (req, res, next) => {
        try {
            const { error, value } = authentificationValidate.validate(req.body)
            if (error) {
                return next(
                    new AppError(400, 'fail', error.details[0].message),
                    req,
                    res,
                    next
                )
            }
            const user = await userDB.getOneWithPassByUsername(value.username)
            if (!user.rowCount) {
                return next(
                    new AppError(404, 'fail', `${value.username} username bilan foydalanuvchi topilmadi!`),
                    req,
                    res,
                    next
                )
            }
            const isVerified = await cryptoManager.pass.verify(value.password, user.rows[0].password)
            if (!isVerified) {
                return next(
                    new AppError(400, 'fail', 'Maxfiy parol xato!'),
                    req,
                    res,
                    next
                )
            }
            const token = cryptoManager.token.generate({
                userId: user.rows[0].id,
                role: user.rows[0].role,
                createdTime: new Date().getTime(),
                tokenTime: TOKEN_TIME
            })
            res.status(200).json({
                status: 'success',
                data: {
                    token
                }
            })
        } catch (error) {
            next(error)
        }
    },
    identification: async (req, res, next) => {
        try {
            let token
            if (req.headers.authorization) {
                token = req.headers.authorization.split(' ')[1]
            }
            if (!token) {
                return next(
                    new AppError(403, 'fail', 'Forbidden Error!'),
                    req,
                    res,
                    next
                )
            }
            const decoded = cryptoManager.token.verify(token)
            if (decoded === undefined) {
                return next(
                    new AppError(403, 'fail', 'Forbidden Error!'),
                    req,
                    res,
                    next
                )
            }
            if (decoded.role !== 'Admin' && decoded.role !== 'User') {
                return next(
                    new AppError(403, 'fail', 'Forbidden Error!'),
                    req,
                    res,
                    next
                )
            }
            if (decoded.createdTime && decoded.tokenTime) {
                if (((new Date().getTime()) - decoded.createdTime) > decoded.tokenTime) {
                    new AppError(403, 'fail', 'Forbidden Error!'),
                        req,
                        res,
                        next
                }
            } else {
                return next(
                    new AppError(403, 'fail', 'Forbidden Error!'),
                    req,
                    res,
                    next
                )
            }
            if (decoded.userId) {
                const user = await userDB.getOneById(decoded.userId)
                if (!user.rowCount) {
                    return next(
                        new AppError(403, 'fail', 'Forbidden Error!'),
                        req,
                        res,
                        next
                    )
                }
                req.user = user.rows[0]
            } else {
                return next(
                    new AppError(403, 'fail', 'Forbidden Error!'),
                    req,
                    res,
                    next
                )
            }
            next()
        } catch (error) {
            next(error)
        }
    },
    authorization: (...roles) => {
        return (req, res, next) => {
            try {
                if (!roles.includes(req.user.role)) {
                    return next(
                        new AppError(403, 'fail', 'Forbidden Error!'),
                        req,
                        res,
                        next
                    )
                }
                next()
            } catch (error) {
                next(error)
            }
        }
    },
    registration: (req, res) => {
        const { body } = req
        try {

            // Registration code.

            res.status(201).json({
                status: 'success',
                data: null
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = authController