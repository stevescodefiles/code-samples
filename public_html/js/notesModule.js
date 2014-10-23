/* 
 * notesApp module
 * using self in a controller is preferred over this
 */
angular.module('notesApp', [])
        .controller('MainCtrl', [function(){
        //controller specific code goes here
            var self = this;
            self.message = 'Hello ';
            
            self.changeMessage = function(){
                if(self.message === 'Hello') {
                      self.message = 'Goodbye';
                } else {
                      self.message = 'Hello'; 
                }
            };
        console.log('MainCtrl has been created');
}]);