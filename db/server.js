var express =require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Works = require('./api/modelWorks'),
    Tasks = require('./api/modelTasks'),
    bodyParser = require('body-parser');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/Worksdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//missed an s
var routes = require('./api/WorksListRouters');
routes(app);

app.listen(port);
console.log('user List started on:' + port);