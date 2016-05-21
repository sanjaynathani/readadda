import express = require('express');
import path = require('path');
var port: number = process.env.PORT || 3000;
var app = express();

app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
app.use('/app', express.static(path.resolve(__dirname, 'app')));
 
var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}
 
//app.get('/*', renderIndex);

app.get('/', function(req, res) {
  var url = path.resolve(__dirname, 'index.html');
  res.sendFile(url, null, function(err) {
    if (err) res.status(500).send(err);
    else res.status(200).end();
  });
});
 
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});