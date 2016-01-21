app.controller('TestController', ['$resource', function($resource){
    var self= this;
    var genders = ['m','f']
    var gender = $resource('/gender/M')
    var test = []
    
    gender.get(function(result){
        console.log(result)
    })   
}])