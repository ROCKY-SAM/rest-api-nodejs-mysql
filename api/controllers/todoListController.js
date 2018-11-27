'use strict';

var Task = require('../models/todoListModel.js');

exports.list_all_tasks = function (req, res) {

    Task.getAllTask(function (err, task) {
        console.log("controller");
        if (err)
            res.send(err);
        console.log('res', task);
        res.send(task);
    });
};

exports.create_a_task = function (req, res) {
    console.log(req.body);
    var new_task = new Task(req.body);
    if (!new_task.task || !new_task.status) {
        res.status(400).send({
            error: true,
            message: 'please provide task/status task is task ' + new_task.task + ' status' + new_task.status
        });
    } else {
        Task.createTask(new_task, function (err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    }
};

exports.read_a_task = function (req, res) {
    Task.getTaskById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.update_a_task = function (req, res) {
    console.log(req.params.taskId);
    Task.updateById(req.params.taskId, new Task(req.body), function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.delete_a_task = function (req, res) {
    Task.remove(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json({
            message: 'Task deleted'
        });
    });
};