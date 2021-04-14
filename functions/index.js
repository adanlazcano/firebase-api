const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const app = express();

const serviceAccount = require("./permissions.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


app.get('/hello-world', (req, res) => {

    return res.status(200).json({ message: 'Hello world' });
});

app.use(require('./routes/products.routes'));

exports.app = functions.https.onRequest(app);