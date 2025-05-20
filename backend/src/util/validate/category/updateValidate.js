const Joi = require('joi')

const categoryUpdateValidate = Joi.object({
    title: Joi.string()
        .min(3)
        .required()
        .messages({
            'string.min': 'Kategoriya nomi 3 tadan kam bo\'lmagan belgilar ishlatilishi kerak',
            'string.empty': 'Kategoriya nomi bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Kategoriya nomi bo\'sh bo\'lishi mumkin emas!'
        }),

    active: Joi.string()
        .pattern(new RegExp('^(true|false)$'))
        .required()
        .messages({
            'string.pattern.base': 'Kategoriya holatini to\'g\'ri tanlang!',
            'string.empty': 'Kategoriya holatini bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Kategoriya holatini bo\'sh bo\'lishi mumkin emas!'
        })
})

module.exports = categoryUpdateValidate