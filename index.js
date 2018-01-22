var express = require('express')
var app = express()

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), () => console.log('Example app listening on port 3000!'))
