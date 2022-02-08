const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");

const util = require("../../lib/util");
const posts = require("../../dbMockup/post");

module.exports = async(req, res) => {
    const { id } = req.params;
    const { title, contents } = req.body;

    if (!title && !contents) {
        return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    
    const post = posts.filter(post => post.id === Number(id))[0];
    if (!post) {
      return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
    } else {
        if (title) post[0].title = title;
        if (contents) post[0].contents = contents;
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.POST_UPDATE_SUCCESS, post));
};