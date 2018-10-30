const express = require('express');
const mysql = require('mysql');
const router = express.Router();

//ROUTE FOR MESSAGES
router.get('/messages', (req, res) =>{
    res.send('hola');
    res.end();
});

//ROUTE FOR USERS
router.get('/users', (req,res) => {
    const connection = getConnection();
    const queryString = "SELECT * FROM users";
    connection.query(queryString, (err, rows, fields) =>{
        if (err){
            res.sendStatus(500); 
            return;
        }
        res.json(rows);
    })

});

//ROUTE FOR USER
router.get('/user/:id', (req,res) => {
    console.log("fetching user with id: " + req.params.id);
    const connection = getConnection();
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
    });
    
//THE POST to add in mySQL
router.post('/user_create', (req, res) => {
    res.send("first name " + req.body.create_first_name);
    const firstName = req.body.create_first_name;
    const lastName = req.body.create_last_name;
    //ahora insertamos el sql query
    const queryString = "INSERT INTO users (first_name, last_name) VALUES (?, ?)"
    getConnection().query(queryString, [firstName, lastName], (err, results, fields) =>{
        if(err){
            console.log("fail to insert user" + err);
            res.sendStatus(500);
            return
        }
        console.log("insert new user with id: ", results.insertId);
    })  
})
    

module.exports = router;

//mySQL DB CONNECTION

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '35.238.53.82',
    user: 'sampleuser',
    password: 'password',
    database: 'users'
})
     
function getConnection(){
    return pool;
    };
 