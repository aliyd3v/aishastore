const AppError = require("../../util/appError");

module.exports = (req, res, next) => next(new AppError(404, 'fail', 'Undefined route!'), req, res, next)