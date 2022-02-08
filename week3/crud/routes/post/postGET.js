const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");

const util = require("../../lib/util");
const posts = require("../../dbMockup/post");

module.exports = async(req, res) => {
    const { id } = req.params;

    const post = posts.filter(post => post.id === id)[0];
    if (!post) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_POST_SUCCESS, post));
};