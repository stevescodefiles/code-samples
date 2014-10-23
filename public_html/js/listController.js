/* 
 * notesApp module
 * using self in a controller is preferred over this
 */
angular.module('notesApp', [])
        .controller('ListCtrl', [function(){
        //controller specific code goes here
            var self = this;
            self.message = 'Hello ';
            
            self.items = [
                {id: 1, label: 'First', done: true},
                {id: 2, label: 'Second', done: false}
            ];
            
            self.getDoneClass = function(item) {
                return {
                    finished: item.done,
                    unfinished: !item.done
                };
            };
}]);