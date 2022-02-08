const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");

const util = require("../../lib/util");
const posts = require("../../dbMockup/post");
const users = require("../../dbMockup/user");

module.exports = async(req, res) => {
    const { title, contents, writerId } = req.body;

    if (!title || !contents || !writerId) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const existingWriter = users.filter(user => user.id ===  Number(writerId))[0];
    if(!existingWriter) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const newPost = {
        id: posts.length + 1, 
        title, 
        contents, 
        writerId,
    };
    
    res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.CREATED_POST, newPost));
};