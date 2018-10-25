const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('hello from root');
});

app.get('/users', (req,res) => {
    res.send('si, users');
});

app.listen(3003, () => {
console.log("SERVER UP PPAPU");
});
