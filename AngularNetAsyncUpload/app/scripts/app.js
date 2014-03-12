'use strict';

angular.module('angularUploadApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angularFileUpload'
])

.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/upload.html',
        controller: 'UploadCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
