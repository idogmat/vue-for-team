'use strict';

var mongoose = require('mongoose'),
    Tasks = mongoose.model('Tasks');


exports.list_all_tasks = function (req, res) {
    Tasks.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
//missed semicolumn
};

exports.create_a_task = function (req, res) {
    var new_task = new Tasks(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
//missed semicolumn

};

exports.read_a_task = function (req, res) {
    Tasks.findById(req.params.id, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};