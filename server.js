const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Let's Encrypt!</h1>");
});

app.listen(8080);