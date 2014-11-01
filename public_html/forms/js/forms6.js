/* 
 * Created by Steve Guinn 
 * Working with forms 5
 * Form will only submit if values in fields are valid
 */

angular.module('notesApp', [])
    .controller('MainCtrl', [function(){
        var self = this;
        
        self.submit = function() {
            console.log( 'Form fields valid, submit handled/ ', self.user);
        };
        
}]);


