app.controller('BookingController', ['$resource', function($resource){
    var self = this;
    var film = "test";
    var bookings = $resource('/api/getbookings/' + film)
    var film = $resource('/api/getfilm/test')
    
    setInterval(function(){
        bookings.get(function(result){
            var sold = 0
            for (var key in result.result){
                sold += result.result[key].number
            }

            film.get(function(result){
                self.spaces = result.result[0].spaces
                self.sold = sold
                self.left = result.result[0].spaces - sold
            })
            
        })
    }, 5)
}])

app.controller('FilmController', ['$resource', function($resource){
    var self = this;
    var film = $resource('/api/getfilm/test')
    
//    film.get(function(result){
//        self.space 
//    })
}])