app.controller('MachineInfo', ['$resource', '$http', function ($resource, $http) {
    var self = this;

    var cpu = $resource('/api/cpu');
    var load = $resource('/api/cpuload')
    var ram = $resource('/api/ram');
    var os = $resource('/api/os');

    cpu.get(new cpu, function (result) {
        self.model = result.model
    })

    load.get(new load, function(result){
        self.cores = result.load
    })
    
    setInterval(function(){
        load.get(new load, function(result){
            self.load = result.load
        })        
    }, 250)
    
    ram.get(new ram, function (result) {
        console.log(result)
        self.ram = result.ram
    })

    os.get(new os, function (result) {
        self.opsys = result.os
    })

}]);
