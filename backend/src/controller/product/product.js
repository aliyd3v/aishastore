const AppError = require('../../util/appError.js')
const categoryDB = require('../database/category.js')
const productDB = require('../database/product.js')
const productCreateValidate = require('../../util/validate/product/createValidate.js')
const productUpdateValidate = require('../../util/validate/product/updateValidate.js')

const Product = {
    create: async (req, res, next) => {
        try {
            if (!req.body) {
                return next(
                    new AppError(400, 'fail', 'Request body cannot be empty!'),
                    req,
                    res,
                    next
                )
            }
            const { error, value } = productCreateValidate.validate(req.body)
            if (error) {
                return next(
                    new AppError(400, 'fail', error.details[0].message),
                    req,
                    res,
                    next
                )
            }
            if (isNaN(Number(value.categoryId))) {
                return next(
                    new AppError(400, 'fail', 'Kategoriya ID noto\'g\'ri formatda!'),
                    req,
                    res,
                    next
                )
            }
            const category = await categoryDB.getOneById(value.categoryId)
            if (!category.rowCount) {
                return next(
                    new AppError(404, 'fail', 'Bunday ID bilan kategoriya topilmadi!'),
                    req,
                    res,
                    next
                )
            }
            const product = await productDB.createOneProduct(value.title, value.description, value.price, value.vategoryId, value.active)
            res.status(201).json({
                status: 'success',
                data: {
                    product: product.rows[0]
                }
            })
        } catch (error) {
            next(error)
        }
    },
    createItem: async (req, res, next) => {
        try {
            // Write here.
        } catch (error) {
            next(error)
        }
    },
    getAll: async (req, res, next) => {
        try {
            // Write here.
        } catch (error) {
            next(error)
        }
    },
    getOne: async (req, res, next) => {
        try {
            // Write here.
        } catch (error) {
            next(error)
        }
    },
    getOneItem: async (req, res, next) => {
        try {
            // Write here.
        } catch (error) {
            next(error)
        }
    },
    updateOne: async (req, res, next) => {
        try {
            // Write here.
        } catch (error) {
            next(error)
        }
    },
    updateOneItem: async (req, res, next) => {
        try {
            // Write here.
        } catch (error) {
            next(error)
        }
    },
    deleteOne: async (req, res, next) => {
        try {
            // Write here.
        } catch (error) {
            next(error)
        }
    },
    deleteOneItem: async (req, res, next) => {
        try {
            // Write here.
        } catch (error) {
            next(error)
        }
    },
}

module.exports = Product