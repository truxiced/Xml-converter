    var express = require('express'),
        path = require('path'),
        http = require('http');


    var app = express();

   // app.configure(function () {
        app.set('port', process.env.PORT || 3000);
      //  app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
       //app.use(express.bodyParser()),
            app.use(express.static(path.join(__dirname)));
   // });

    app.get('/wines', function(req, res) {
        res.send([{name:'wine1'}, {name:'wine2'}]);
    });
    app.get('/wines/:id', function(req, res) {
        res.send({id:req.params.id, name: "The Name", description: "description"});
    });

    http.createServer(app).listen(app.get('port'), function () {
        console.log("Express server listening on port " + app.get('port'));
    });