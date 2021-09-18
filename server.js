const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send("<h1>Let's Encrypt</h1>");
});

app.get('/.well-known/acme-challenge/evUiu6WMCLURXX7Ev72nRSMQWtTSkNm98pJ-qFaOHu0', (req, res) => {
	res.send('evUiu6WMCLURXX7Ev72nRSMQWtTSkNm98pJ-qFaOHu0.JnToXCNdZmBk7IIFq88_ZK3aI2_2bb5Iz4LXMSzE6WA');
});

const privateKey = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/chain.pem', 'utf8');

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