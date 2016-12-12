
(function() {
  'use strict';

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderCtrl'
          },
          'footer': {
            templateUrl: 'src/common/footer.tpl.html',
            controller: 'FooterCtrl'
          }
        }
      })
      .state('root.home', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/home/home.tpl.html',
            controller: 'HomeCtrl as home',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      })
      .state('root.about-us', {
        url: '/about-us',
        views: {
          '@': {
            templateUrl: 'src/app/about-us/about-us.tpl.html',
            controller: 'AboutUsCtrl'
          }
        }
      })
      .state('root.why', {
        url: '/why',
        views: {
          '@': {
            templateUrl: 'src/app/why/why.tpl.html',
            controller: 'WhyCtrl'
          }
        }
      })
      .state('root.contact', {
        url: '/contact',
        views: {
          '@': {
            templateUrl: 'src/app/contact/contact.tpl.html',
            controller: 'ContactCtrl'
          }
        }
      })
  }

  angular.module('router', [
    'ui.router',
    'home',
    'about-us',


    'common.header',
    'common.footer',
    'common.services.data',
    'common.directives.version',
    'common.filters.uppercase',
    'common.interceptors.http',
    'templates'
  ])
    .config(config);
})();
