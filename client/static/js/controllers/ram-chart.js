app.controller('RamChart', ['$resource', function ($resource) {
    var self = this;

    var ram = $resource('/api/ram')

    var ctx = $("#ramUsage").get(0).getContext("2d");
    var myNewChart = new Chart(ctx)

    var data = {
        labels: ["", "", "", "", "", "", ""],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [0, 0, 0, 0, 0, 0, 0]
        }
    ]
    };

    myNewChart = new Chart(ctx).Line(data, {
        scaleOverride: true,
        scaleStartValue: 0,
        scaleStepWidth: 10,
        scaleSteps: 10,
        animationSteps: 0,
        pointDot: false
    })

    myNewChart.resize()
    

    setInterval(function () {
        ram.get(new ram, function (result) {
            var percent = result.freemem / result.totalmem
            myNewChart.addData([100 - (percent * 100)], "")
            myNewChart.removeData()
        })
    }, 500)
}])
