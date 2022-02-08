const responseMessage = require("../../../constants/responseMessage");
const statusCode = require("../../../constants/statusCode");

const util = require("../../../lib/util");
const posts = require("../../../dbMockup/post");

module.exports = async(req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const existingPost = posts.filter(post => post.id === Number(id))[0];
    if (!existingPost) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
    }

    const newPosts = posts.filter(post => post.id !== Number(id));
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.POST_DELETE_SUCCESS, newPosts));
};