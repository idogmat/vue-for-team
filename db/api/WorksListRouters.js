'use strict';


module.exports = function (app) {
    var worksList = require('./WorksListController'),
     taskList = require("./TasksListController");
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
//missed parentesis
    app.route('/Works')
        .get(worksList.list_all_works)
        //.post(worksList.create_a_work);
    app.route('/Tasks')
        .get(taskList.list_all_tasks)
        //.post(taskList.create_a_task);

    app.route('/Works/:id')
        .get(worksList.read_a_work);

};