angular.module('uibTab',['ui.router','ui.bootstrap'])
.config(function ($stateProvider,$urlRouterProvider) {
  //$urlRouterProvider.otherwise("/maintab");
  $stateProvider
    .state('maintab', {
      url: '/maintab',
      templateUrl: 'tab/maintab.html',
      controller: 'uibTabs'
    })
    .state("maintab.goto", {
		url: "/{page}",
		templateUrl: function (stateParams){
			var tokens = stateParams.page.split("`");
			if(tokens.length==2){
			  return tokens[0] + "/"  + tokens[1] + ".html"
			}
			return stateParams.page + "/" + stateParams.page + ".html";
			//app.maintab.goto({page:'backup-restore`tab1'})
		  }
  	})
 })
.controller('uibTabs',function ($scope,$state){
	$scope.message="Wlecome...";
	$state.go("maintab.goto","{page:'tab`tab1'}");

	$scope.tabs = [
		{ heading: "Tab 1", route:"'maintab.goto','{page:'tab`tab1'}'"},
		{ heading: "Tab 2", route:"'maintab.goto','{page:'tab`tab2'}'"},
		{ heading: "Tab 3", route:"'maintab.goto','{page:'tab`tab3'}'"},
    ];
});