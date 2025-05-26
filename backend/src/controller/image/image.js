const { uploadToCloud } = require("../../helper/s3Client")
const AppError = require("../../util/appError")
const image = require("../database/image")

const Image = {
    createOne: async (req, res, next) => {
        try {
            if (!req.file) return next(
                new AppError(400, 'fail', 'Rasm yuklanmadi. Iltimos rasmni yuklang!'),
                req,
                res,
                next
            )
            const imageUrl = await uploadToCloud(req.file.path, req.file.filename)
            await image.createProductItemImage(req.filename, imageUrl, req.params.id)
            next()
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
    updateOne: async (req, res, next) => {
        try {
            // Write here.
        } catch (error) {
            next()
        }
    },
    deleteOne: async (req, res, next) => {
        try {
            if (isNaN(Number(req.params.id))) return next(
                new AppError(400, 'fail', 'Rasm ID formati not\'g\'ri!'),
                req,
                res,
                next
            )
            // write here.
        } catch (error) {
            next()
        }
    }
}

module.exports = Image