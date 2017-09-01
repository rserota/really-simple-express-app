var express = require('express')
var app = express()

app.get('/', function(req, res){
    console.log("we're logging on the server!")
    res.send("<h1>Welcome to the internet!</h1>")
})

// port 80 is the default port for HTTP traffic.
app.listen(80)