var quranApp = angular.module('quranApp', ['ui.router', 'ngCordova']);

quranApp.directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A', /* optional */
        link: function (scope, el, attrs) {
            el.replaceWith(el.children());
        }
    };
})
.directive('sidebarTree', function () {
    return {
    	// restrict: 'A', /* optional */
        link: function (scope, el, attrs) {
            
        	$.AdminLTE.tree('.'+attrs.class);

        }
    };
})
.directive('sidebarToggle', function () {
    return {
    	restrict: 'A', /* optional */
        link: function (scope, el, attrs) {
            
        	$.AdminLTE.pushMenu.activate(el);

        }
    };
});