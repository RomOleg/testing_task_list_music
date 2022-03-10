const ApiError = require("../error/ApiError");

module.exports = async function  (req, res, next) {
    const badWorlds = ['Монеточка', 'монеточка', 'monetochka', 'mонеточка'];

    if (badWorlds.includes(req.body.name)) {
        next(ApiError.badWorld('Название являеться недопустимым'))
    }
    next();
}