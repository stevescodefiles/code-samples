/* 
 * Created by Steve Guinn 
 * Working with forms 4
 * First form creates a user object prior to sending to server.
 * Second form makes more sense as model is directly expressed
 * in the form fields (ctrl.user.username) removing any additional
 * work in the corresponding js (self.submit2 function)
 */

angular.module('notesApp', [])
    .controller('MainCtrl', [function(){
        var self = this;
        
        self.submit1 = function() {
            //Create user object to send to the server
            var user = {
                username: self.username,
                password: self.password,
            };
              console.log( 'First form submit with ', user );  
        };
        
        self.submit2 = function() {
            console.log( 'Second form submit with ', self.user);
        };
        
}]);


