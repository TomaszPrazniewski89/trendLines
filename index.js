//import library
let express = require('express')
let connection = require('./dbconfig')
//create and delate variable
let app = express();


//code is to service this server We could also use other HTTP requests( POST DLETE UPDATE) for other reasons
//We use with querries
app.get('/getData', function (req, res) {
    //We create variables oehere because server can run for a few days so we dont wait it to run when we start application
    // We wan;t to to be created for each querry

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + mm + dd;
    const start = today
    const database = 'wopc'

    connection.query(`select T04,T09,T17,T20,T13,T19,T11,T01 ,zn_czas  from la_${today} ORDER BY zn_czas DESC LIMIT 1  `, (err, rows) => {
        if (err) throw err;
        let result = rows
        console.log(rows)
        res.send(JSON.stringify(result))
    })


})

// the instance of express library is running here
app.listen(3000, function () {
    //working server
    console.log("Server Wystartowal")
})