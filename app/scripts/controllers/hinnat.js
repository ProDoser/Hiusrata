'use strict';

/**
 * @ngdoc function
 * @name hiusApp.controller:HinnatCtrl
 * @description
 * # AboutCtrl
 * Controller of the hiusApp
 */
angular.module('hiusApp')
  .controller('HinnatCtrl', function ($scope) {

      $scope.kampaamot = [{
          name: 'Hiustenleikkaus +pesu +föön',
          tarjous: '32/37/42',
          normal: '35/40/45'
      }, {
          name: 'Tasausleikkaus',
          tarjous: '25',
          normal: '28'
      }, {
          name: 'Otsatukan leikkaus',
          tarjous: '13',
          normal: '15'
      }, {
          name: 'Pitkien hiusten lisä/ Mallinmuutosleikkaus',
          tarjous: '10-15',
          normal: '10-15'
      }, {
          name: 'Hää-, rulla-, kiharakampaukset',
          tarjous: 'tunti 60',
          normal: 'tunti 60'
      }, {
          name: 'Pesu + föönaus',
          tarjous: 'alk.25',
          normal: 'alk.30'
      }
      ];
      $scope.varit = [{
          name: 'Tyviväri+pesu+föön',
          tarjous: 'alk.62',
          normal: 'alk.65'
      }, {
          name: 'Lyhyiden hiusten väri/ raidat+lk+föön',
          tarjous: '82',
          normal: '85'
      }, {
          name: 'Puolipitkien hiusten väri/ raidat+lk+föön',
          tarjous: '92',
          normal: '95'
      }, {
          name: 'Pitkien hiusten väri/ raidat+lk+föön',
          tarjous: '102',
          normal: '105'
      }, {
          name: 'Monivärilisä',
          tarjous: '10',
          normal: '10'
      }, {
          name: 'Erikoispitkien/ paksujen hiusten lisä/ varin poisto',
          tarjous: '10-20',
          normal: '10-20'
      }, {
          name: 'Ripset ja kulmat',
          tarjous: '25',
          normal: '28'
      }, {
          name: 'Ripset',
          tarjous: '15',
          normal: '18'
      }, {
          name: 'Kulmat (väri+ muotoilu)',
          tarjous: '15',
          normal: '18'
      }, {
          name: 'Kulmat (väri)',
          tarjous: '12',
          normal: '15'
      }, {
          name: 'Kulmat (muotoilu)',
          tarjous: '10',
          normal: '13'
      }];
      $scope.hoitot = [{
          name: 'Tehohoito ja päähieronta',
          tarjous: 'alk.27',
          normal: 'alk.32'
      }, {
          name: 'BTX-rakennehoito',
          tarjous: 'alk.45',
          normal: 'alk.50'
      }, {
          name: 'Hiustenlähtöön jälleenrakentava ampullihoito',
          tarjous: '27',
          normal: '32'
      }, {
          name: 'väri-, vaalennuskäsittelyn yhdessä',
          tarjous: '15-20',
          normal: '15-20'
      }, {
          name: 'Hoitoon leikkauslisä',
          tarjous: '15-20',
          normal: '15-20'
      }];
      $scope.parturit = [{
          name: 'Hiustenleikkaus+ pesu',
          tarjous: '24-27',
          normal: '27-30'
      }, {
          name: 'Mallinmuutos/ jenkkisiilileikkaus',
          tarjous: '30',
          normal: '30'
      }, {
          name: 'Väri+ leikkaus',
          tarjous: 'alk.50',
          normal: 'alk.55'
      }, {
          name: 'Koneajoleikkaus',
          tarjous: '15',
          normal: '20'
      }, {
          name: 'Lasten hiusten leikkaus alle 7v.',
          tarjous: '15',
          normal: '20'
      }];
  });




