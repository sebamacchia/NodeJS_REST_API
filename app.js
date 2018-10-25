const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');

app.use(morgan('short'));

app.get('/', (req,res) => {
    res.send('hello from root');
});

app.get('/user/:id', (req,res) => {
console.log("fetching user with id: " + req.params.id);

const connection = mysql.createConnection({
    host: '35.238.53.82',
    user: 'sampleuser',
    password: 'password',
    database: 'users'
});

const userId = req.params.id;
const queryString = "SELECT  * FROM users WHERE id = ?";
connection.query(queryString, [userId], (err, rows, fields) => {
    if (err){
        res.sendStatus(500); 
        return;
    }
    console.log ("creo que me conecte a la nube");
    res.json(rows);
})
// res.send("fetching user with id: " + req.params.id);

});

app.get('/users', (req,res) => {
const user1 = {firstName:"Ricardi", lastName:"Two"};
const user2 = {firstName:"Charles", lastName:"MChill"};
res.json([user1, user2]);
});

app.listen(3003, () => {
console.log("SERVER UP PPAPU");
});
