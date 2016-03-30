'use strict';

/**
 * @ngdoc overview
 * @name hiusApp
 * @description
 * # hiusApp
 *
 * Main module of the application.
 */
angular
  .module('hiusApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
      'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/hinnat', {
        templateUrl: 'views/hinnat.html',
        controller: 'HinnatCtrl',
        controllerAs: 'hinnat'
      })
      .when('/yhteystiedot', {
        templateUrl: 'views/yhteystiedot.html',
        controller: 'YhteystiedotCtrl',
        controllerAs: 'yhteystiedot'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

$(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});
$(".navbar-brand").on("click", function(){
    $(".nav").find(".active").removeClass("active");
});



