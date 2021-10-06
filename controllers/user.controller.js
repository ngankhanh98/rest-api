const httpStatus = require('http-status');
const createError = require('http-errors');
const { getUserByUserId } = require('../models/user.model');

async function getProfile(req, res, next) {
    const { userId } = req.params

    try {
        const result = await getUserByUserId(userId)
        res.status(httpStatus.OK).json(result)
    } catch (error) {
        // res.error(httpStatus.INTERNAL_SERVER_ERROR, error.message)
        next(createError(httpStatus.INTERNAL_SERVER_ERROR, error.message))
    }

}

module.exports = {
    getProfile
};
