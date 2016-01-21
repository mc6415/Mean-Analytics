app.controller('CpuChart', ['$resource', function ($resource) {
    var self = this;
    var cpu = $resource('/api/cpuload')
    var ctx = []
    var charts = []

    cpu.get(new cpu, function (result) {
        for (var i in result.load) {
            var core = ".core" + result.load[i].core
            var data = [{value: 100, color: "#888888"}, {value: 0, color: "#0000FF"}]
            ctx[i] = $(core).get(0).getContext("2d")
            charts[i] = new Chart(ctx[i]).Doughnut(data, {animationSteps: 1})
            charts[i].resize()
        }

        setInterval(function(){
            cpu.get(new cpu, function(result){
                for (var i in result.load){
                    var data = [
                        {
                            value: result.load[i].load,
                            color: "#FF0000"
                        },
                        {
                            value: 100 - result.load[i].load
                        }
                    ];                  
                    charts[i].removeData()
                    charts[i].addData({value: result.load[i].load, color: "#FF0000"})
                }
            })
        }, 250)
        
    })
}])