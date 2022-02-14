const port = 80;
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/calc', (req, res) => res.send('my name is calculator!'));

app.get('/funcionarios', (req, res) => res.send("HI MY NAME IS FELYPE"));

app.listen(port, () => console.log('Example app listening on port ${port}!'));
