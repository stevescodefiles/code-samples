/* 
 * Created by Steve Guinn 
 * example js for ng-repeat-start and ng-repeat-end
 * repeat-start-end.html
 */
angular.module('notesApp', [])
    .controller('MainCtrl', [function(){
        var self = this;
        
        self.notes = [
            {id: 1, label: 'First Note', done: false},
            {id: 2, label: 'Second Note', done: false},
            {id: 3, label: 'Finished Third Note', done: true}
        ];
    }]);