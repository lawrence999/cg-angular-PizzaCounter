angular.module('user').directive('disableAnimate', function($animate) {
	return {
		restrict: 'A',
			link: function($scope, $element, $attrs){
	            $attrs.$observe('disableAnimate', function(value){
	                $animate.enabled(!value, $element);

				});
		    }
		};
});
