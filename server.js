var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');



app.use(express.static(path.join(__dirname, './angularApp/dist')));



app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./angularApp/dist/index.html"))
});



// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})