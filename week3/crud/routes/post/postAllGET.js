const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");

const util = require("../../lib/util");
const posts = require("../../dbMockup/post");

module.exports = async(req, res) => {
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_ALL_POST_SUCCESS, posts));
};