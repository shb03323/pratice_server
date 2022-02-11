const admin = require("firebase-admin");
const serviceAccount = require('./wesopt29-4395e-firebase-adminsdk-ija3w-9d6d28b471.json');
const dotenv = require('dotenv');

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
    firebase = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
} else {
    firebase = admin.app();
}

module.exports = {
    api : require('./api')
};