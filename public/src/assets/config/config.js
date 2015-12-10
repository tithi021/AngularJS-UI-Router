routeApp.config(function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/whereyou');

	$stateProvider

		.state('whereyou',{
			url:'/whereyou',
			templateUrl:'whereyou/template/whereyou.html',
			controller: 'whereyouCtrl'
		})

		.state('finddestination',{
			url: '/finddestination',
			templateUrl:'find-destination/template/finddestination.html',
			controller: 'finddestinationCtrl'

		})
});