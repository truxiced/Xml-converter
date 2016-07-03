    var express = require('express'),
        path = require('path'),
        http = require('http'),
        io = require('socket.io'),
        bodyParse = require('body-parser'),
        json2xml = require('json2xml');


    var app = express();

    app.set('port', process.env.PORT || 3000);
    app.use(bodyParse()),
    app.use(express.static(path.join(__dirname)));


    /**
     * Simply convert the request body to xml and returns it in the response.
     */
    app.post('/test', function(req, res) {

        res.send(json2xml(req.body));

    });



    var server = http.createServer(app).listen(app.get('port'), function () {
        console.log("Express server listening on port " + app.get('port'));
    });

    /**
     * Initialize Socket.io to listen to server
     */
    var sio = io.listen(server);

    /**
     * Set socket.io to start listening to connections.
     */
    sio.sockets.on('connection', function(socket){

        console.log('User connected');

        /*
         * Waiting for client to send message on "json2xml"
         */
        socket.on('json2xml', function(json) {

            sio.sockets.emit("json2xml",json2xml(json));
        });
    });



