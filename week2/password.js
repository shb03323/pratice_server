const fs = require("fs");
const crypto = require("crypto");

const salt = "QxLUF1bglAdeQXbv5PehSMfV11CdYYLmfY6lehjZMQ";
const iterations = 100000;
const keylen = 64;
const digest = "sha512";
const callback = (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString("hex"));
    fs.writeFile("week2/hashed.txt", derivedKey.toString("hex"), (err, data) => {
        if (err) return console.log(err.message);
    });
};
const password = fs.readFileSync('week2/password.txt').toString();

const encrypt = crypto.pbkdf2(
    password,
    salt,
    iterations,
    keylen,
    digest,
    callback
);

encrypt;