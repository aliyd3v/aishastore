const pg = require('../../database/postgres.js')
const cryptoManager = require('../../helper/crypto.js')
const AppError = require('../../util/appError.js')
const userCreateValidate = require("../../util/validate/user/createValidate.js")
const userPasswordUpdateValidate = require('../../util/validate/user/updatePasswordValidate.js')
const userUpdateValidate = require("../../util/validate/user/updateValidate.js")
const userDB = require('../database/user.js')

const User = {
    create: async (req, res, next) => {
        try {
            if (!req.body) {
                return next(
                    new AppError(400, 'fail', 'Reques body cannot be empty!'),
                    req,
                    res,
                    next
                )
            }
            const { error, value } = userCreateValidate.validate(req.body)
            if (error) {
                return next(
                    new AppError(400, 'fail', error.details[0].message),
                    req,
                    res,
                    next
                )
            }
            if (value.password !== value.repeat_password) {
                return next(
                    new AppError(400, 'fail', 'Maxfiy parol bilan takroriysi bir xil emas!'),
                    req,
                    res,
                    next
                )
            }
            value.repeat_password = undefined
            const condidat = await userDB.getOneByUsername(value.username)
            if (condidat.rowCount) {
                return next(
                    new AppError(400, 'fail', `'${value.username}' usename bilan allaqachon foydalanuvchi mavjud! Iltimos boshqa usernamedan foydalaning.`),
                    req,
                    res,
                    next
                )
            }
            const passwordHash = await cryptoManager.pass.hash(value.password)
            value.password = undefined
            const newUser = await userDB.createOne(value.name, value.username, passwordHash, value.role)
            res.status(200).json({
                status: 'success',
                data: {
                    user: newUser.rows[0]
                },
                message: 'User is created successfully'
            })
        } catch (error) {
            next(error)
        }
    },
    getAll: async (req, res, next) => {
        try {
            const users = await userDB.getAll()
            res.status(200).json({
                status: 'success',
                data: {
                    count: users.rowCount,
                    users: users.rows
                }
            })
        } catch (error) {
            next(error)
        }
    },
    getOne: async (req, res, next) => {
        try {
            if (isNaN(Number(req.params.id))) {
                return next(
                    new AppError(400, 'fail', 'Id noto\'g\'ri formatda!'),
                    req,
                    res,
                    next
                )
            }
            const user = await userDB.getOneById(req.params.id)
            if (!user.rowCount) {
                return next(
                    new AppError(404, 'fail', 'Bunday id bilan foydalanuvchi topilmadi!'),
                    req,
                    res,
                    next
                )
            }
            res.status(200).json({
                status: 'success',
                data: {
                    user: user.rows[0]
                }
            })
        } catch (error) {
            next(error)
        }
    },
    updateOne: async (req, res, next) => {
        try {
            if (isNaN(Number(req.params.id))) {
                return next(
                    new AppError(400, 'fail', 'Id noto\'g\'ri formatda!'),
                    req,
                    res,
                    next
                )
            }
            if (!req.body) {
                return next(
                    new AppError(400, 'fail', 'Reques body cannot be empty!'),
                    req,
                    res,
                    next
                )
            }
            const { error, value } = userUpdateValidate.validate(req.body)
            if (error) {
                return next(
                    new AppError(400, 'fail', error.details[0].message),
                    req,
                    res,
                    next
                )
            }
            const user = await userDB.getOneById(req.params.id)
            if (!user.rowCount) {
                return next(
                    new AppError(404, 'fail', 'Bunday id bilan foydalanuvchi topilmadi!'),
                    req,
                    res,
                    next
                )
            }
            if (user.rows[0].username !== value.username) {
                const condidat = await userDB.getOneByUsername(value.username)
                if (condidat.rowCount) {
                    return next(
                        new AppError(404, 'fail', `'${value.username}' username bilan allaqachon foydalanuvchi mavjud!`),
                        req,
                        res,
                        next
                    )
                }
            }
            const updatedUser = await userDB.updateOne(
                value.name,
                value.username,
                value.role,
                value.phone ? value.phone : null,
                value.email ? value.email : null,
                req.params.id
            )
            res.status(200).json({
                status: 'success',
                data: {
                    user: updatedUser.rows[0]
                },
                message: 'User has been updated successfully'
            })
        } catch (error) {
            next(error)
        }
    },
    updatePassword: async (req, res, next) => {
        try {
            if (isNaN(Number(req.params.id))) {
                return next(
                    new AppError(400, 'fail', 'Id noto\'g\'ri formatda!'),
                    req,
                    res,
                    next
                )
            }
            if (!req.body) {
                return next(
                    new AppError(400, 'fail', 'Request body cannot be empty!'),
                    req,
                    res,
                    next
                )
            }
            // Validation body.
            const { error, value } = userPasswordUpdateValidate.validate(req.body)
            if (error) {
                return next(
                    new AppError(400, 'fail', error.details[0].message),
                    req,
                    res,
                    next
                )
            }
            if (value.password !== value.repeat_password) {
                return next(
                    new AppError(400, 'fail', 'Maxfiy parol bilan takroriysi bir xil emas!'),
                    req,
                    res,
                    next
                )
            }
            value.repeat_password = undefined
            const user = await userDB.getOneById(req.params.id)
            if (!user.rowCount) {
                return next(
                    new AppError(404, 'fail', 'Bunday id bilan foydalanuvchi topilmadi!'),
                    req,
                    res,
                    next
                )
            }
            if (req.user.id !== user.rows[0].id && user.rows[0].role === 'Admin') {
                return next(
                    new AppError(404, 'fail', 'Boshqa adminning maxfiy parolini o\'zgartirish mumkin emas!'),
                    req,
                    res,
                    next
                )
            }
            const passwordHash = await cryptoManager.pass.hash(value.password)
            value.password = undefined
            await userDB.updatePass(passwordHash, req.params.id)
            res.status(200).json({
                status: 'success',
                data: null,
                message: 'Password has been changed successfully'
            })
        } catch (error) {
            next(error)
        }
    },
    deleteOne: async (req, res, next) => {
        try {
            if (isNaN(Number(req.params.id))) {
                return next(
                    new AppError(400, 'fail', 'Id noto\'g\'ri formatda!'),
                    req,
                    res,
                    next
                )
            }
            const user = await userDB.getOneById(req.params.id)
            if (!user.rowCount) {
                return next(
                    new AppError(404, 'fail', 'Bunday id bilan foydalanuvchi topilmadi!'),
                    req,
                    res,
                    next
                )
            }
            if (user.rows[0].role === 'Admin') {
                return next(
                    new AppError(404, 'fail', 'Boshqa admin bo\'lgan foydalanuvchini o\'chirishga ruxsat etilmaydi!'),
                    req,
                    res,
                    next
                )
            }
            await userDB.deleteOne(req.params.id)
            res.status(200).json({
                status: 'success',
                data: null,
                message: 'User has been deleted successfully'
            })
        } catch (error) {
            next(error)
        }
    },
    deleteMe: async (req, res, next) => {
        try {
            if (isNaN(Number(req.user.id))) {
                return next(
                    new AppError(400, 'fail', 'Id noto\'g\'ri formatda!'),
                    req,
                    res,
                    next
                )
            }
            const admins = await pg.query(`SELECT id, FROM users WHERE role = 'Admin';`)
            if (admins.rowCount === 1) {
                return next(
                    new AppError(400, 'fail', 'Adminlar soni bitta bo\'lgani uchun uni o\'chirish mumkin emas!'),
                    req,
                    res,
                    next
                )
            }
            await userDB.deleteOne(req.user.id)
            res.status(200).json({
                status: 'success',
                data: null,
                message: 'User has been deleted successfully'
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = User