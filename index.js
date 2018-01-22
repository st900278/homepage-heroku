var express = require('express');
var mustache = require("mustache-express");
var app = express()

app.set('port', (process.env.PORT || 8000));
app.engine('html', mustache());
app.set('view engine', 'html');
app.set("views", __dirname + '/views');

app.use(express.static('semantic'));
// GET method route
app.get('/', function(req, res) {
    res.render('index');
})

// POST method route
app.post('/', function(req, res) {
    res.send('POST request to the homepage')
})


app.listen(app.get('port'), () => console.log('Listening on port ' + app.get('port')))
