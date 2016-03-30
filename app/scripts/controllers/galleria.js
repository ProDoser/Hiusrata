'use strict';

/**
 * @ngdoc function
 * @name hiusApp.controller:GalleriaCtrl
 * @description
 * # GalleriaCtrl
 * Controller of the hiusApp
 */
angular.module('hiusApp')
  .controller('GalleriaCtrl', function ($scope) {
      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      $scope.photos = [{
          src: 'images/photo1.jpg',
          id: 0
      }, {
          src: 'images/photo3.jpg',
          id: 1
      }, {
          src: 'images/photo2.jpg',
          id: 2
      }, {
          src: 'images/photo4.jpg',
          id: 3
      }
      ];
  });
