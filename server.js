const express = require('express');

const app = express();

const PORT = process.env.port || 8080;

app.get('/', (req, res) => {
	res.send("<h1>Let's Encrypt!</h1>");
})

app.listen(PORT);

