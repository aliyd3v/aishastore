const Joi = require('joi')

const productCreateValidate = Joi.object({
    title: Joi.string()
        .min(3)
        .max(255)
        .required()
        .messages({
            'string.min': 'Mahsulot nomi 3 tadan kam va 255 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak',
            'string.max': 'Mahsulot nomi 3 tadan kam va 255 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak',
            'string.empty': 'Mahsulot nomi bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Mahsulot nomi bo\'sh bo\'lishi mumkin emas!'
        }),

    description: Joi.string()
        .min(3)
        .max(255)
        .required()
        .messages({
            'string.min': 'Mahsulot haqida ma\'lumot 3 tadan kam va 255 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak',
            'string.max': 'Mahsulot haqida ma\'lumot 3 tadan kam va 255 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak',
            'string.empty': 'Mahsulot haqida ma\'lumot bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Mahsulot haqida ma\'lumot bo\'sh bo\'lishi mumkin emas!'
        }),

    price: Joi.number()
        .required()
        .messages({
            'number.empty': 'Narx bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Narx bo\'sh bo\'lishi mumkin emas!'
        }),

    categoryId: Joi.number()
        .required()
        .messages({
            'number.empty': 'Mahsulot bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Mahsulot bo\'sh bo\'lishi mumkin emas!'
        }),

    discount: Joi.string()
        .pattern(new RegExp('^(100|[1-9]?[0-9])$'))
        .messages({
            'string.pattern.base': 'Chegirma 0%dan 100%gacha bo\'lishi mumkin!'
        }),

    active: Joi.string()
        .pattern(new RegExp('^(true|false)$'))
        .required()
        .messages({
            'string.pattern.base': 'Mahsulotning holatini to\'g\'ri tanlang!',
            'string.empty': 'Mahsulotning holatini bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Mahsulotning holatini bo\'sh bo\'lishi mumkin emas!'
        })
})

module.exports = productCreateValidate