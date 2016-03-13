'use strict';

/**
 * @ngdoc function
 * @name hiusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hiusApp
 */
angular.module('hiusApp')
  .controller('MainCtrl', function ($scope) {

      $scope.myInterval = 0;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      $scope.slides = [{
          src: 'images/img1.jpg',
          text: 'Tarjous klo 9-12',
          id: 0
      }, {
          src: 'images/img2.jpg',
          text: 'Ilman ajanvarausta',
          id: 1
      }, {
          src: 'images/img3.jpg',
          text: 'alk 20€',
          id: 2
      }
      ];
  });
