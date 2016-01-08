(function(){
    var app = angular.module('directives', [])
    
    app.directive('mainDashboard', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/templates/dashboard.html'
        }
    });
    
    app.directive('sideBar', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/templates/sidebar.html'
        }
    });
    
    app.directive('headerMenu', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/templates/header.html'
        }
    })
})();