//REQUIREMENTS
const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//USES
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('./public'));
app.use(morgan('short')); 

//ROUTE FOR ROOT
app.get('/', (req,res) => {
    res.send('hello from root');
});


const router = require ('./routes/user.js')
app.use(router); 

//SERVER CONFIG
app.listen(3003, () => {
console.log("SERVER UP PPAPU");
});
