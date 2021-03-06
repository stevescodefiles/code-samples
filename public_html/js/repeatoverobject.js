/* 
 * Created by Steve Guinn 
 * Working with arrays of JSON objects
 */
angular.module('notesApp', [])
    .controller('MainCtrl', [function(){
        var self = this;
    
        self.notes = [
            {id: 1, label: 'First Note', done: false, assignee: 'Steve'},
            {id: 2, label: 'Second Note', done: false},
            {id: 3, label: 'Done Note', done: true},
            {id: 1, label: 'Last Note', done: false, assignee: 'Fred'}
        ];
        
        self.oldnotes = {
            shyam: {
                id: 1,
                label: 'First Note',
                done: false
            },
            Misko: {
                id: 3,
                label: 'Finished Third Note',
                done: true
            },
            brad: {
                id: 2,
                label: 'Second Note',
                done: false
            }
        };
    }]);