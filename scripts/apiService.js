// NOTE: No array -> we are not creating a module
var app = angular.module('MyModule');

var apiService = function ($http) {


    var getUsers = function () {
        return $http.get('http://localhost:3000/users')
            .then(response => {
                return response.data
            })
    }

    var addUser = function ($data) {
        return $http.post('http://localhost:3000/users', $data)
            .then(response => {
                return response.data
            })
    }

    var deleteUser = function ($id) {
        return $http.delete('http://localhost:3000/users/' + $id)
            .then(response => {
                if (response.status == 200) {
                    return response.data;
                } else {
                    alert('can not delete');
                }

            })
    }

    var editUser = function ($data, $id) {
        return $http.put('http://localhost:3000/users/' + $id, $data)
            .then(response => {
                return response.data
            })
    }

    return {
        // getFirstTodo,
        // getUserById,
        getUsers,
        deleteUser,
        addUser,
        editUser
    }
}

app.factory('apiService', apiService);