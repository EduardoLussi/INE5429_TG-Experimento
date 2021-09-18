const express = require('express');
const app = express();

app.use(express.static(__dirname, { dotfiles: 'allow' } ));

app.get('/.well-known/acme-challenge/evUiu6WMCLURXX7Ev72nRSMQWtTSkNm98pJ-qFaOHu0', (req, res) => {
	res.send('evUiu6WMCLURXX7Ev72nRSMQWtTSkNm98pJ-qFaOHu0.JnToXCNdZmBk7IIFq88_ZK3aI2_2bb5Iz4LXMSzE6WA');
});

app.listen(80, () => {
  console.log('HTTP server running on port 80');
});