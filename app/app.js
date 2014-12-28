/**
 * Created by kyle on 11/16/14.
 */
var app = angular.module('app', [
    'ui.router'
]);

(function () {
    'use strict';

    run.$inject = ['$rootScope', '$state', '$stateParams'];

    angular.module("app").run(run);

    function run($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
})();


app.config(['$urlRouterProvider', '$locationProvider', '$stateProvider',
    function ($urlRouterProvider, $locationProvider, $stateProvider) {

        $stateProvider.state('home', {
            url: "/",
            templateUrl: "app/index.html",
            data: {title: 'Game Some More - Home'}
        })
        $stateProvider.state('blog', {
            url: "/blog",
            templateUrl: "app/blog/index.html",
            data: {title: 'Game Some More - Blog'}
        })
        $stateProvider.state('archive', {
            url: "/archives",
            templateUrl: "app/archives/index.html",
            data: {title: 'Game Some More - Archives'}
        })
        $stateProvider.state('archive2', {
            url: "/archives/2",
            templateUrl: "app/archives/index2.html",
            data: {title: 'Game Some More - Archives - Page 2'}
        })
        $stateProvider.state('archive3', {
            url: "/archives/3",
            templateUrl: "app/archives/index3.html",
            data: {title: 'Game Some More - Archives - Page 3'}
        })
        $stateProvider.state('about', {
            url: "/about",
            templateUrl: "app/about/index.html",
            data: {title: 'Game Some More - About'}
        })
        $stateProvider.state('gamereview', {
            url: "/reviews",
            templateUrl: "app/reviews/index.html",
            data: {title: 'Game Some More - Reviews'}
        })

        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    }]);
//for the navbar
$(".nav a").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});
