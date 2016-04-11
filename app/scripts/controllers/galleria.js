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
      $scope.gallery = [{
          thumb: 'images/gallery1_thumb.jpg',
          img: 'images/gallery1.jpg'
      }, {
          thumb: 'images/gallery2_thumb.jpg',
          img: 'images/gallery2.jpg'
      }, {
          thumb: 'images/gallery3_thumb.jpg',
          img: 'images/gallery3.jpg'
      }, {
          thumb: 'images/gallery4_thumb.jpg',
          img: 'images/gallery4.jpg'
      }, {
          thumb: 'images/gallery5_thumb.jpg',
          img: 'images/gallery5.jpg'
      }, {
          thumb: 'images/gallery6_thumb.jpg',
          img: 'images/gallery6.jpg'
      }
      ];
  });
