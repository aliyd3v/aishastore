const Joi = require('joi')

const userCreateValidate = Joi.object({
    name: Joi.string()
        .min(3)
        .max(64)
        .required()
        .messages({
            'string.min': 'Ism 3 tadan kam va 64 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak',
            'string.max': 'Ism 3 tadan kam va 64 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak',
            'string.empty': 'Ism bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Ism bo\'sh bo\'lishi mumkin emas!'
        }),

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

    repeat_password: Joi.string()
        .min(3)
        .max(32)
        .required()
        .messages({
            'string.min': 'Maxfiy parol 3 tadan kam va 32 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak!',
            'string.max': 'Maxfiy parol 3 tadan kam va 32 tadan ko\'p bo\'lmagan belgilar ishlatilishi kerak!',
            'string.empty': 'Maxfiy parolning takroriysi  bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Maxfiy parolning takroriysi bo\'sh bo\'lishi mumkin emas!'
        }),

    role: Joi.string()
        .pattern(new RegExp('^(Admin|User)$'))
        .required()
        .messages({
            'string.pattern.base': 'Role \'Admin\' yoki \'User\' bo\'lishi mumkin!',
            'string.empty': 'Role bo\'sh bo\'lishi mumkin emas!',
            'any.required': 'Role bo\'sh bo\'lishi mumkin emas!'
        }),

    phone: Joi.string()
        .pattern(new RegExp('^\\+998(33|77|99|95|98|91|90|88|97|93|94|55)[0-9]{7}$'))
        .message('Telefon raqamini noto\'g\'ri formatda kiritdingiz!'),

    email: Joi.string()
        .email()
        .message('Email manzilni noto\'g\'ri formatda kiritdingiz!')
})

module.exports = userCreateValidate