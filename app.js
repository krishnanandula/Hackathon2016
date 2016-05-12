/**
 * Created by rachanti on 6/20/2015.
 */
var express = require('express');
var cors = require('cors');
var request = require('request');
var app = express();

app.use(cors());
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var port = process.env.PORT || 3100;

var router = express.Router();


router.route('/users/:Id').get(function(req,res) {
        var sentence =  req.params.Id;
        var msg = null;
        var wikiBaseUrl = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=";
        var query = sentence;
        //
        //
        //request(wikiBaseUrl+query, function (error, response, body) {
        //    if (!error && response.statusCode == 200) {
        //        msg = _.flatten(JSON.stringify(JSON.parse(response.body).query.pages))
        //        var u = {"name" : msg};
        //        res.json(u);
        //    }
        //})
    var u = {"name" : "<b>test</b>"};
    res.json(u);
    });

app.use('/api',router);
app.get('/',function(req,res){
    res.send('hackathon');
});

app.listen(port,function(){
    console.log('Hack on the port',port);
});
app.on('error', function (err) {
    console.log('dir error', err);
});




