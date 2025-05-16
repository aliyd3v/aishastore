const Joi = require('joi')

const authentificationValidate = Joi.object({
    username: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,32}$'))
        .required()
        .messages({
            'string.pattern.base': 'Username a-z, A-Z va 0-9 belgilari asosida 3 tadan kam va 32 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak!',
            'string.empty': 'Username bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Username bo\'sh bo\'lishi mumkin emas!'
        }),

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
})

module.exports = authentificationValidate