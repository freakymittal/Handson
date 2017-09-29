const app = angular.module('app', ['angularMoment', 'ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	 .when('/', {
	  templateUrl: 'assets/IssuesView.html',
	  controller: 'IssuesCtrl',
	  resolve: {
	  }
	}).when('/postIssue', {
		templateUrl: 'assets/postIssue.html',
		controller: 'PostIssueCtrl',
		resolve: {
		}
	  });
}]);
app.filter('timechange', function () {
	return function (input) {
		if (input === 'No Due Date')
			return input
		return 'Closed on ' + (new Date(input)).toDateString().split(' ').slice(1).join(' ');
	}
});
app.directive('modal', ['ModalService', function (ModalService) {
	return {
		link: function (scope, element, attrs) {
			if (!attrs.id) {
				console.error('modal must have an id');
				return;
			}
			element.appendTo('body');
			element.on('click', function (e) {
				var target = $(e.target);
				if (!target.closest('.modal-body').length) {
					scope.$evalAsync(Close);
				}
			});
			var modal = {
				id: attrs.id,
				open: Open,
				close: Close
			};
			ModalService.Add(modal);
			scope.$on('$destroy', function () {
				ModalService.Remove(attrs.id);
				element.remove();
			});

			function Open() {
				element.show();
				$('body').addClass('modal-open');
			}

			function Close() {
				element.hide();
				$('body').removeClass('modal-open');
			}
		}
	};
}]);
app.factory('ModalService', function () {
	var modals = []; // array of modals on the page
	return {
		Add: function(modal) {
			// add modal to array of active modals
			modals.push(modal);
		},
		Remove: function (id) {
			// remove modal from array of active modals
			// (modals.filter(function(obj){return obj.id === id}))[0];
			// var modalToRemove = _.findWhere(modals, {
			// 	id: id
			// });
			var modalToRemove = (modals.filter(function(obj){return obj.id === id}))[0];
			modals = modals.filter(obj => obj.id !== modalToRemove.id);
			// modals = _.without(modals, modalToRemove);
		},
		Open: function(id) {
			// open modal specified by id
			// var modal = _.findWhere(modals, {
			// 	id: id
			// });
			var modal = modals.filter(function(obj){return obj.id === id})[0];
			modal.open();
		},
		Close: function(id) {
			// close modal specified by id
			// var modal = _.findWhere(modals, {
			// 	id: id
			// });
			var modal = (modals.filter(function(obj){return obj.id === id}))[0];
			modal.close();
		}
	}

	

	

	

	
});
app.directive('ngEnter', function () {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if (event.which === 13) {
				scope.$apply(function () {
					scope.$eval(attrs.ngEnter);
				});
				event.preventDefault();
			}
		});
	};
});
app.service('MyService', ['$http', function ($http) {
	var service = this;
	this.config = {};
	this.getData = function (url) {
		return $http.get(url);
	};
	this.getConfig = function(){
		return new Promise(function(resfn, rejfn){
			if(Object.keys(service.config).length !== 0){
				resfn(service.config);
			}else{
				console.log("Testing the values of config.json file, if it completes process will continue automatically");
				service.getData('./config.json').then(function (res) {
					service.getData(`${res.data.api_url}search/issues?q=${res.data.repo_name}&page=1&per_page=1`).then(function (r) {
						console.log("The results might be wrong if you provided wrong value in repo_name, cause Githup API can give results even if you provide wrong repo name");
						service.getData(`${res.data.api_url}repos/${res.data.repo_name}/issues?page=1&per_page=1`).then(function (result) {
							service.config = res.data;
							if(service.config!=={}){
								resfn(service.config);
							}else{
								rejfn();
							}
						}, function (rej) {
							console.log("You provided wrong value in repo_url");
							console.log(rej);
							alert("If data is not being fetched please check in the console for more details");
						})
					}, function (rej) {						
						console.log(rej);
						alert("If data is not being fetched please check in the console for more details");
					})
				}, function (rej) {
					console.log("You don't have config file.");
					console.log(rej);
					alert("You don't have config file. Check in the console for more details");
				});
			}
		});
	}
	this.postData = function (url, data) {
		return $http.post(url, data);
	};
	this.invertColor = function (color) {
		return {
			color: tinycolor.mostReadable(tinycolor(color), Object.keys(tinycolor.names)).toHexString()
		};
	}
}]);
app.controller('PostIssueCtrl', ['$scope', 'MyService', '$location', function($scope, MyService, $location){
	$scope.init = function () {
		MyService.getConfig().then(function(res){
			$scope.config = res;
		});
	}
	$scope.fn = {};
	$scope.fn.postIssue = function (issue) {
        if($scope.config.access_token === 'Enter your acccesstoken here'){
            console.log("Enter a valid access token in the config.json for posting a issue");
            console.log("Generate the personal access token from ", $scope.config.access_token_link);
        }
        else{ 
            $scope.createdIssue = false;
			issue.labels = issue.labels ? issue.labels.replace(/\s/g, '').split(',') : [];
		    MyService.postData(`${$scope.config.api_url}repos/${$scope.config.repo_name}/issues?access_token=${$scope.config.access_token}`, issue).then(function (res) {
                console.log(res);
                $scope.createdIssue = true;
		    }).then(function(){
				$scope.postIssue = {};
				$location.url('/');
			});
        }
	}
}]);