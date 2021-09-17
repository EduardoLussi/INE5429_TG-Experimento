const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/.well-known/acme-challenge/EUsjOqnzj0dB1hg9QR-nQrm471FSXj0NG9VBusLjFc4', (req, res) => {
    res.send("EUsjOqnzj0dB1hg9QR-nQrm471FSXj0NG9VBusLjFc4.JnToXCNdZmBk7IIFq88_ZK3aI2_2bb5Iz4LXMSzE6WA");
});

app.get('/', (req, res) => {
    res.send("<h1>Let's Encrypt</h1>");
})

app.listen(PORT);