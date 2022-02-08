const express = require("express");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const router = express.Router();

const util = require("../functions/lib/util");
const users = require("../functions/dbMockup/user");

/* 

sign up
METHOD : POST
URI : localhost:3000/user/signup
REQUEST BODY : id, name, password, email
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : All User Data

*/
router.post("/signup", async (req, res) => {
    const { id, name, password, email } = req.body;
    // request data 확인 - 네 개 중 하나라도 없다면 Bad Request 반환
    if (!id || !name || !password || !email) {
        return res.status(400).send(util.fail(400, "BAD REQUEST"));
    }

    // 해당 email를 가진 유저가 이미 있을 경우 Already Email 반환
    const alreadyUser = users.filter(user => user.email === email).length > 0;
    if (alreadyUser) {
        return res.status(409).send(util.fail(409, "ALREADY EMAIL"));
    }

    const newUser = { id, name, password, email };

    users.push(newUser);

    res.status(200).send(util.success(200, "회원가입 성공", newUser));
});

/* 

login
METHOD : POST
URI : localhost:3000/user/login
REQUEST BODY : id, password
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : 비밀번호를 제외한 User 정보

*/
router.post("/login", async (req, res) => {
    // request body에서 데이터 가져오기
    const { email, password } = req.body;

    // request data 확인 - 없다면 Null Value 반환
    if (!email || !password) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    // 존재하는 유저인지 확인 - 없다면 No user 반환
    const user = users.filter(user => user.email === email)[0];

    if (!user) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    // 비밀번호 확인 - 틀렸다면 Missmatch password 반환
    if (user.password !== password) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.MISS_MATCH_PW,
                ),
            );
    }

    // 성공 - login success와 함께 비밀번호를 제외한 유저 정보 반환
    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        }),
    );
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { newName } = req.body;

    if (!id || !newName) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    const existingUser = users.filter(user => user.id === Number(id))[0];

    if (!existingUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const updatedUser = { ...existingUser, name: newName };

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.USER_UPDATE_SUCCESS,
            updatedUser,
        ),
    );
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
            );
    }

    const existingUser = users.filter(user => user.id === Number(id))[0];

    if (!existingUser) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    const newUsers = users.filter(user => user.id !== Number(id));

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.USER_DELETE_SUCCESS,
            newUsers,
        ),
    );
});

/* 

get profile
METHOD : GET
URI : localhost:3000/user/profile/:id
RESPONSE STATUS : 200 (OK)
RESPONSE DATA : 비밀번호를 제외한 User 정보

*/
router.get("/profile/:id", async (req, res) => {
    // request params에서 데이터 가져오기
    const id = Number(req.params.id);

    // 존재하는 아이디인지 확인 - 없다면 No user 반환
    const user = users.filter(user => user.id === id)[0];
    if (!user) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
    }

    // 성공 - login success와 함께 userId 반환
    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK, 
            responseMessage.LOGIN_SUCCESS, 
            {"userId": id}
        )
    );
});

module.exports = router;