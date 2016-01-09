app.controller('MachineInfo', ['$resource', '$http', function ($resource, $http) {
    var self = this;

    var cpu = $resource('/api/cpu');
    var ram = $resource('/api/ram');
    var os = $resource('/api/os');

    cpu.get(new cpu, function (result) {
        self.model = result.model
    })

    ram.get(new ram, function (result) {
        console.log(result)
        self.ram = result.ram
    })

    os.get(new os, function (result) {
        self.opsys = result.os
    })

}]);
