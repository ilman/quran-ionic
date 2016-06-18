function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/index");

    $stateProvider

        // Main Template
        .state('app', {
            templateUrl: "templates/template.html",
            data: {
                pageTitle: 'Quran'
            }
        })

        // Index
        .state('app.index', {
            url: "/index",
            templateUrl: "templates/index.html",
            data: {
                pageTitle: 'Quran Index'
            }
        })

        .state('app.surah', {
            url: '/surah/:aId',
            templateUrl: "templates/surah.html",
            data: {
                pageTitle: 'Quran Surah'
            }
        })

}

quranApp.config(configState)
    // .run(function($rootScope, $state, editableOptions) {
    //     $rootScope.$state = $state;
    //     editableOptions.theme = 'bs3';
    // });