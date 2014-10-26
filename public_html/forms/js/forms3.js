/* 
 * Created by Steve Guinn 
 * Working with forms 3
 * Using ng-model, AngularJS automatically creates
 * automatically creates the objects and keys necessary
 * to instantiate a data-binding connection.
 */

angular.module('notesApp', [])
    .controller('MainCtrl', [function(){
        var self = this;
        
        self.submit = function() {
            console.log( 'User clicked submit with ', self.user );
        };
        
}]);


