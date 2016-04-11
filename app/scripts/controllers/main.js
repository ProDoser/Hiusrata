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

      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
      $scope.slides = [{
          src: 'images/img1.jpg',
          text: '',
          id: 0
      }, {
          src: 'images/img2.jpg',
          text: '',
          id: 1
      }, {
          src: 'images/img3.jpg',
          text: '',
          id: 2
      }
      ];
  });
