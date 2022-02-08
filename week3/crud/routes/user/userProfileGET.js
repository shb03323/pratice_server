const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");

const util = require("../../lib/util");
const users = require("../../dbMockup/user");

module.exports = async(req, res) => {
    const { id } = req.params;

    const user = users.filter(user => user.id === id)[0];
    if (!user) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const userProfile = user.id;
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, userProfile));
};