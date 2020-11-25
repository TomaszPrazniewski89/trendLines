//import library
let express = require('express')
let connection = require('./dbconfig')
//create and delate variable
let app = express();


//code is to service this server We could also use other HTTP requests( POST DLETE UPDATE) for other reasons

app.get('/getData', function (req, res) {
    //odsylany (send)
    res.send('Hello World')
})

// the instance of express library is running here
app.listen(3000, function () {
    //working server
    console.log("Server Wystartowal")
})