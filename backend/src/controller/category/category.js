const categoryCreateValidate = require("../../util/validate/category/createValidate.js")
const AppError = require('../../util/appError.js')
const pg = require('../../database/postgres.js')
const categoryUpdateValidate = require("../../util/validate/category/updateValidate.js")
const categoryDB = require('../database/category.js')

const Category = {
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
            const { error, value } = categoryCreateValidate.validate(req.body)
            if (error) {
                return next(
                    new AppError(400, 'fail', error.details[0].message),
                    req,
                    res,
                    next
                )
            }
            const condidat = await categoryDB.getOneByTitle(value.title)
            if (condidat.rowCount) {
                return next(
                    new AppError(400, 'fail', `'${value.title}' nomi bilan allaqachon kategoriya mavjud!`),
                    req,
                    res,
                    next
                )
            }
            const category = await categoryDB.createOne(value.title, value.active)
            res.status(201).json({
                status: 'success',
                data: {
                    category: category.rows[0]
                },
                message: 'Category has been created successfully'
            })
        } catch (error) {
            next(error)
        }
    },
    getAll: async (req, res, next) => {
        try {
            const categories = await categoryDB.getAll()
            res.status(200).json({
                status: 'success',
                data: {
                    count: categories.rowCount,
                    categories: categories.rows
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
                    new AppError(400, 'fail', 'ID noto\'g\'ri formatda!'),
                    req,
                    res,
                    next
                )
            }
            const category = await categoryDB.getOneById(req.params.id)
            if (!category.rowCount) {
                return next(
                    new AppError(404, 'fail', 'Bunday ID bilan kategoriya topilmadi!')
                )
            }
            res.status(200).json({
                status: 'success',
                data: {
                    category: category.rows[0]
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
                    new AppError(400, 'fail', 'ID formati noto\'g\'ri!'),
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
            const { error, value } = categoryUpdateValidate.validate(req.body)
            if (error) {
                return next(
                    new AppError(400, 'fail', error.details[0].message),
                    req,
                    res,
                    next
                )
            }
            const category = await categoryDB.getOneById(req.params.id)
            if (!category.rowCount) {
                return next(
                    new AppError(404, 'fail', 'Bunday ID bilan kategoriya topilmadi!'),
                    req,
                    res,
                    next
                )
            }
            if (category.rows[0].title !== value.title) {
                const condidat = await categoryDB.getOneByTitle(value.title)
                if (condidat.rowCount) {
                    return next(
                        new AppError(400, 'fail', `'${value.title}' nomi bilan kategoriya mavjud!`),
                        req,
                        res,
                        next
                    )
                }
            }
            const updatedCategory = await category.updateOne(value.title, value.active, req.params.id)
            res.status(200).json({
                status: 'success',
                data: {
                    category: updatedCategory.rows[0]
                },
                message: 'Category has been updated successfully'
            })
        } catch (error) {
            next(error)
        }
    },
    deleteOne: async (req, res, next) => {
        try {

            if (isNaN(Number(req.params.id))) {
                return next(
                    new AppError(400, 'fail', 'ID formati noto\'g\'ri!'),
                    req,
                    res,
                    next
                )
            }
            const category = await categoryDB.getOneById(req.params.id)
            if (!category.rowCount) {
                return next(
                    new AppError(404, 'fail', 'Bunday ID bilan kategoriya topilmadi!'),
                    req,
                    res,
                    next
                )
            }
            await categoryDB.deleteOne(req.params.id)
            res.status(200).json({
                status: 'success',
                data: null,
                message: 'Category has been deleted successfully'
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Category