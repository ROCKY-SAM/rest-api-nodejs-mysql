'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/todoListController.js');

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,HEAD");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task)

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task)
}