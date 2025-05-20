const Joi = require('joi')

const userPasswordUpdateValidate = Joi.object({
    password: Joi.string()
        .min(3)
        .max(32)
        .required()
        .messages({
            'string.min': 'Maxfiy parol 3 tadan kam va 32 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak!',
            'string.max': 'Maxfiy parol 3 tadan kam va 32 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak!',
            'string.empty': 'Maxfiy parol bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Maxfiy parol bo\'sh bo\'lishi mumkin emas!'
        }),

    repeat_password: Joi.string()
        .min(3)
        .max(32)
        .required()
        .messages({
            'string.min': 'Maxfiy parol 3 tadan kam va 32 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak!',
            'string.max': 'Maxfiy parol 3 tadan kam va 32 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak!',
            'string.empty': 'Maxfiy parolning takroriysi  bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Maxfiy parolning takroriysi bo\'sh bo\'lishi mumkin emas!'
        })
})

module.exports = userPasswordUpdateValidate