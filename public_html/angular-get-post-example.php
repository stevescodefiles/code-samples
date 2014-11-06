<!DOCTYPE html>

<html ng-app="notesApp">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <style type="text/css">
            #authorTable {
                border: 1px solid #cgd033;
                width: 40%;
                font-family: sans-serif;
            }
            th {
                font-weight: bold;
                background-color: #31708f;
                color: #fff;
                padding: 3px;
            }
            
            td {
                border: 1px solid #ccc;
            }
            
            tr:odd td {
                background-color: #c4e3f3;
            }
            
            tr:even td {
                background-color: #c0c0c0;
            }
        </style>
    </head>
    <body ng-controller="MainCtrl as mainCtrl">
        <h1>Hello Servers</h1>
        
        
        <div>
            <form name="addForm" ng-submit="mainCtrl.add()">
                <input type="text"
                       name="label"
                       placeholder="label"
                       ng-model="mainCtrl.newTodo.label"
                       required />
                
                <input type="text"
                       name="author"
                       placeholder="Author"
                       ng-model="mainCtrl.newTodo.author"
                       required />
                
                <input type="submit"
                       value="Add"
                       ng-disabled="addForm.$invalid" />
            </form>
        </div>
        
        <table id="authorTable">
            <thead>
                <tr>
                    <th>publisher</th>
                    <th>title</th>
                </tr>
                <tr ng-repeat="todo in mainCtrl.items" class="item">
                    <td ng-bind="todo.label"></td>
                    <td ng-bind="todo.author"></td>
                </tr>
            </thead>
        </table>
        
        <script src="js/angular.min.js"></script>
        <script>
            angular.module('notesApp', [])
                    .controller('MainCtrl', ['$http',
            function($http) {
                
                var self = this;
                self.items = [];
                self.newTodo = {};
                
                var fetchTodos = function() {
                    return $http.get('ajax/getNotes.php')
                        .then( function(response) {
                                self.items = response.data;
                            }, function(errResponse){
                                console.error('Error while fetching notes');
                            });
                        };
                fetchTodos();
                
                self.add = function() {
                    console.log('posted');
                    $http.post('ajax/db.php', self.newTodo)
                            .then(fetchTodos)
                            .then(function(response) {
                                self.newTodo = {};
                             });
                    };
                }]);
        </script>
    </body>
</html>
