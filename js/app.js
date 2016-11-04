'use strict';

var app = angular.module('app', [
    'ngRoute', 'ngResource',
    'angular-loading-bar']);

app.config(function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html'
    });

    $routeProvider.when('/projects', {
        templateUrl: 'templates/projects.html'
    });

    $routeProvider.when('/apartment', {
        templateUrl: 'templates/apartment.html'
    });

    $routeProvider.when('/services', {
        templateUrl: 'templates/services.html'
    });

    $routeProvider.when('/contact', {
        templateUrl: 'templates/contact.html'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});