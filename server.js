var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send("<h1>Welcome to the internet!</h1>")
})

// port 80 is the default port for HTTP traffic.
app.listen(80)