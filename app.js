var express = require('express');

var todoController=require('./controller/todoController');

var app = express();

//set template engine
app.set('view engine','ejs');

//static file
app.use(express.static('./public'));

//fire controller
todoController(app);

//listen to port
app.listen(4000);
console.log('you are listening the port 4000');