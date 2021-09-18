const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

const PORT = process.env.port || 8080;

app.get('/', (req, res) => {
	res.send("<h1>Let's Encrypt!</h1>");
})

app.listen(PORT);

app.get('/', (req, res) => {
	res.send("<h1>Let's Encrypt!</h1>");
})

const privateKey = fs.readFileSync('/etc/letsencrypt/live/letsencrypt.onrender.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/letsencrypt.onrender.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/letsencrypt.onrender.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const httpServer = http.createServer(app);
httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});
