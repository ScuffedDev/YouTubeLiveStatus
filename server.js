const express = require('express');
const app = express();

const ytKeys = [];

var channels = [],
    online = []

app.get('*', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end("ok");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
