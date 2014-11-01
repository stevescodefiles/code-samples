/* 
 * Created by Steve Guinn 
 * Angluar and select lists example
 */

angular.module('notesApp', [])
    .controller('MainCtrl', [function(){
        var self = this;
        
        self.countries = [
            {label: 'France', id: 1},
            {label: 'Greece', id: 2},
            {label: 'Denmark', id: 3},
            {label: 'England', id: 4}
        ];
        
        this.selectedCountryId = 4;
        this.selectedCountry = self.countries[0];
        
}]);


