const express = require('express');
const app = express();
const mongo = require('./mongodb');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http')

// Parsers for POST data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
    extended:true
   }));


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})


const forms = require('./forms.js')(app, mongo);





/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log('API running on localhost:' + port));
