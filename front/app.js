var myApp = angular.module('myApp', []);
myApp.controller('myController', function ($scope, $http) {
    $scope.init = function () {
        $http.get('http://localhost:3000/tasks')
            .then(function (response) {
                $scope.jsondata = response.data;
                console.log("status:" + response.status);
            }).catch(function (response) {
                console.error(response);
                console.error('Error occurred:', response.status, response.data);
            }).finally(function () {
                console.log("Task Finished.");
            });
    }

    $scope.deleteTask = function (taskId) {
        $http.delete('http://localhost:3000/tasks/' + taskId)
            .then(function (response) {
                console.log(response);
                $scope.init();
            })
    }

    $scope.editTask = function (taskId) {
        $http.get('http://localhost:3000/tasks/' + taskId)
            .then(function (response) {
                console.log(response);
                $scope.valuetoEdit = response.data;
            });
    }
});