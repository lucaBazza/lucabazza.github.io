'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


// App
/*
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World'); 
});
app.listen(PORT, HOST);
*/

const app = express();
app.use(express.static('dist'));
app.listen(PORT, HOST);

/*var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('src/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);*/


console.log(`Running on http://${HOST}:${PORT}`);



