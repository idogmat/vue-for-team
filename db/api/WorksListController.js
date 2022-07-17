'use strict';

var mongoose = require('mongoose'),
    Works = mongoose.model('Works');


exports.list_all_works = function (req, res) {
    Works.find({}, function (err, work) {
        if (err)
            res.send(err);
        res.json(work);
    });
//missed semicolumn
};

exports.create_a_work = function (req, res) {
    var new_work = new Works(req.body);
    new_work.save(function (err, work) {
        if (err)
            res.send(err);
        res.json(work);
    });
//missed semicolumn

};

exports.read_a_work = function (req, res) {
    Works.findById(req.params.id, function (err, work) {
        if (err)
            res.send(err);
        res.json(work);
    });
};