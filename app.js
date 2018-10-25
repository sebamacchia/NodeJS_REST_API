const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('hello from root');
});

app.listen(3003, () => {
console.log("SERVER UP PPAPU");
});
