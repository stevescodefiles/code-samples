/* 
 * Created by Steve Guinn 
 * Working with forms 6
 * Form will only submit if values in fields are valid
 */

angular.module('notesApp', [])
    .controller('MainCtrl', [function(){
        var self = this;
        
        self.sports = [
            {label: 'Basketball', selected: 'YES'},
            {label: 'Cricket', selected: 'NO'},
            {label: 'Football', selected: 'NO'},
            {label: 'Swimming', selected: 'YES'},
        ]
        
}]);


