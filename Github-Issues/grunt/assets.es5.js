'use strict';

var app = angular.module('app', ['angularMoment', 'ngRoute']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'assets/IssuesView.html',
		controller: 'IssuesCtrl',
		resolve: {}
	}).when('/postIssue', {
		templateUrl: 'assets/postIssue.html',
		controller: 'PostIssueCtrl',
		resolve: {}
	});
}]);
app.filter('timechange', function () {
	return function (input) {
		if (input === 'No Due Date') return input;
		return 'Closed on ' + new Date(input).toDateString().split(' ').slice(1).join(' ');
	};
});
app.directive('modal', ['ModalService', function (ModalService) {
	return {
		link: function link(scope, element, attrs) {
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
		Add: function Add(modal) {
			// add modal to array of active modals
			modals.push(modal);
		},
		Remove: function Remove(id) {
			// remove modal from array of active modals
			// (modals.filter(function(obj){return obj.id === id}))[0];
			// var modalToRemove = _.findWhere(modals, {
			// 	id: id
			// });
			var modalToRemove = modals.filter(function (obj) {
				return obj.id === id;
			})[0];
			modals = modals.filter(function (obj) {
				return obj.id !== modalToRemove.id;
			});
			// modals = _.without(modals, modalToRemove);
		},
		Open: function Open(id) {
			// open modal specified by id
			// var modal = _.findWhere(modals, {
			// 	id: id
			// });
			var modal = modals.filter(function (obj) {
				return obj.id === id;
			})[0];
			modal.open();
		},
		Close: function Close(id) {
			// close modal specified by id
			// var modal = _.findWhere(modals, {
			// 	id: id
			// });
			var modal = modals.filter(function (obj) {
				return obj.id === id;
			})[0];
			modal.close();
		}
	};
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
	this.getConfig = function () {
		return new Promise(function (resfn, rejfn) {
			if (Object.keys(service.config).length !== 0) {
				resfn(service.config);
			} else {
				console.log("Testing the values of config.json file, if it completes process will continue automatically");
				service.getData('./config.json').then(function (res) {
					service.getData(res.data.api_url + 'search/issues?q=' + res.data.repo_name + '&page=1&per_page=1').then(function (r) {
						console.log("The results might be wrong if you provided wrong value in repo_name, cause Githup API can give results even if you provide wrong repo name");
						service.getData(res.data.api_url + 'repos/' + res.data.repo_name + '/issues?page=1&per_page=1').then(function (result) {
							service.config = res.data;
							if (service.config !== {}) {
								resfn(service.config);
							} else {
								rejfn();
							}
						}, function (rej) {
							console.log("You provided wrong value in repo_url");
							console.log(rej);
							alert("If data is not being fetched please check in the console for more details");
						});
					}, function (rej) {
						console.log(rej);
						alert("If data is not being fetched please check in the console for more details");
					});
				}, function (rej) {
					console.log("You don't have config file.");
					console.log(rej);
					alert("You don't have config file. Check in the console for more details");
				});
			}
		});
	};
	this.postData = function (url, data) {
		return $http.post(url, data);
	};
	this.invertColor = function (color) {
		return {
			color: tinycolor.mostReadable(tinycolor(color), Object.keys(tinycolor.names)).toHexString()
		};
	};
}]);
app.controller('PostIssueCtrl', ['$scope', 'MyService', '$location', function ($scope, MyService, $location) {
	$scope.init = function () {
		MyService.getConfig().then(function (res) {
			$scope.config = res;
		});
	};
	$scope.fn = {};
	$scope.fn.postIssue = function (issue) {
		if ($scope.config.access_token === 'Enter your acccesstoken here') {
			console.log("Enter a valid access token in the config.json for posting a issue");
			console.log("Generate the personal access token from ", $scope.config.access_token_link);
		} else {
			$scope.createdIssue = false;
			issue.labels = issue.labels ? issue.labels.replace(/\s/g, '').split(',') : [];
			MyService.postData($scope.config.api_url + 'repos/' + $scope.config.repo_name + '/issues?access_token=' + $scope.config.access_token, issue).then(function (res) {
				console.log(res);
				$scope.createdIssue = true;
			}).then(function () {
				$scope.postIssue = {};
				$location.url('/');
			});
		}
	};
}]);app.controller('IssuesCtrl', ['$scope', 'MyService', '$http', '$location', 'ModalService', '$timeout', function ($scope, MyService, $http, $location, ModalService, $timeout) {
	// $scope.$on('$routeChangeStart', function (scope, next, current) {
	//     if (next.$$route.controller != "Your Controller Name") {
	//         // Show here for your model, and do what you need**
	//         $("#yourModel").show();
	//     }
	// });
	$scope.go = function (path) {
		$location.path(path);
	};
	var vm = this;

	vm.openModal = openModal;
	vm.closeModal = closeModal;

	initController();

	function initController() {
		vm.bodyText = 'This text can be updated in modal 1';
	}

	function openModal(id) {
		ModalService.Open(id);
	}

	function closeModal(id) {
		ModalService.Close(id);
	}
	$scope.data = {}, $scope.CreateIssue = false;
	$scope.viewCreateIssue = function (bool) {
		$scope.CreateIssue = bool;
	};
	$scope.list = {
		labels: [],
		milestones: []
	};
	$scope.issues = {
		page: 1,
		labels: '',
		issue_state: 'open'
	};
	$scope.show = 'issues';
	$scope.dataMessage = '';
	$scope.init = function () {
		MyService.getConfig().then(function (res) {
			$scope.config = res;
			console.log($scope.config);
			$scope.issues.filterIssues('open');
		});
	};
	$scope.init();
	$scope.invertColor = function (color) {
		return MyService.invertColor(color);
	};
	$scope.setShowData = function (data) {
		if (data.length) $scope.showData = data;else {
			$scope.dataMessage = "No Results found, Search for another query. Clearing the query in 2sec....";
			$timeout(function () {
				$scope.issues.filterIssues('open');
			}, 2000);
		}
	};
	$scope.issues.filterpullrequest = function (data) {
		var filteredData = [];
		data.forEach(function (i) {
			if (!i.hasOwnProperty('pull_request')) {
				filteredData.push(i);
			}
		});
		return filteredData;
	};

	// $scope.issues.postIssue = function (issue) {
	//     if($scope.config.access_token === 'Enter your acccesstoken here'){
	//         console.log("Enter a valid access token in the config.json for posting a issue");
	//         console.log("Generate the personal access token from ", $scope.config.access_token_link);
	//     }
	//     else{ 
	//         $scope.createdIssue = false;
	// 		issue.labels = issue.labels ? issue.labels.replace(/\s/g, '').split(',') : [];
	// 		vm.openModal('custom-modal-1');
	// 	    MyService.postData(`${$scope.config.api_url}repos/${$scope.config.repo_name}/issues?access_token=${$scope.config.access_token}`, issue).then(function (res) {
	//             console.log(res);
	//             $scope.createdIssue = true;
	// 	    }).then(function(){
	// 			$scope.postIssue = {};
	// 			vm.closeModal('custom-modal-1');
	// 			$scope.issues.filterIssues('open');
	// 		});
	//     }
	// }
	$scope.issues.getComments = function (id) {
		var url = $scope.config.api_url + 'repos/' + $scope.config.repo_name + '/issues/' + id + '/comments';
		MyService.getData(url).then(function (res) {
			console.log(res);
		});
	};
	$scope.locationChange = function (path) {
		window.location.href = path;
	};

	$scope.issues.nextIssues = function (next) {
		vm.openModal('custom-modal-1');
		var query = '',
		    url = '';
		if (next) {
			++$scope.issues.page;
		} else if (next === false && $scope.issues.page > 1) {
			--$scope.issues.page;
		}
		if ($scope.issues.searchOption === 'filter') {
			if ($scope.issues.label) query = 'repo:' + $scope.config.repo_name + '+label:' + $scope.issues.label;else {
				query = 'repo:' + $scope.config.repo_name + '+' + $scope.issues.filters.replace('state:all', 'state:open state:closed').replace(/\s/g, '+');
			}
			url = $scope.config.api_url + 'search/issues?q=' + query + '&page=' + $scope.issues.page + '&per_page=' + $scope.config.per_page;
		} else {
			url = $scope.config.api_url + 'repos/' + $scope.config.repo_name + '/issues?state=' + $scope.issues.issue_state + '&page=' + $scope.issues.page + '&per_page=' + $scope.config.per_page;
		}
		MyService.getData(url).then(function (res) {
			if ($scope.issues.searchOption === 'filter') {
				$scope.setShowData($scope.issues.filterpullrequest(res.data.items));
			} else $scope.setShowData($scope.issues.filterpullrequest(res.data));
		}, function (rej) {
			if (rej.status === -1) console.log('Check your Internet Connection');else if (rej.status === 404) console.log('Check you repository and username');else if (rej.status === 422) $scope.setShowData([]);
			console.log(rej.data);
		}).then(function () {
			vm.closeModal('custom-modal-1');
		});
	};

	$scope.issues.filterIssues = function (state) {
		$scope.dataMessage = '';
		$scope.CreateIssue = false;
		$scope.issues.filters = '';
		$scope.issues.page = 1;
		$scope.clearData();
		$scope.issues.issue_state = state;
		$scope.issues.nextIssues();
		// vm.closeModal('custom-modal-1');
	};
	$scope.issues.filterResults = function () {
		$scope.clearData();
		$scope.issues.searchOption = 'filter';
		$scope.dataMessage = '';
		$scope.issues.nextIssues();
	};
	$scope.issues.addToFilter = function (filter) {
		$scope.issues.filters += ' ' + filter;
	};
	$scope.issues.getIssuesByLabel = function (l) {
		$scope.clearData();
		$scope.issues.searchOption = 'filter';
		$scope.issues.label = l;
		$scope.issues.nextIssues();
	};
	$scope.clearData = function () {
		$scope.show = 'issues';
		$scope.issues.searchOption = '';
		$scope.issues.issue_state = '';
		$scope.issues.label = '';
	};
	$scope.getAllLabels = function () {
		// vm.openModal('custom-modal-1');
		$scope.show = 'labels';
		$scope.dataMessage = '';
		$scope.showData = [];
		url = $scope.config.api_url + 'repos/' + $scope.config.repo_name + '/labels';
		$scope.getLabels(url).then(function (res) {
			$scope.setShowData(res.data);
		}).then(function () {
			// vm.closeModal('custom-modal-1');
		});
	};
	$scope.getLabels = function () {
		return MyService.getData($scope.config.api_url + 'repos/' + $scope.config.repo_name + '/labels');
	};
	$scope.getLabelsInList = function () {

		if ($scope.list.labels && $scope.list.labels.length === 0) {
			// vm.openModal('custom-modal-1');
			$scope.getLabels().then(function (res) {
				$scope.list.labels = res.data;
			}).then(function () {
				// vm.closeModal('custom-modal-1');
			});
		}
	};
	$scope.getMilestones = function () {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'open';

		// vm.openModal('custom-modal-1');
		$scope.dataMessage = '';
		$scope.show = 'milestones';
		$scope.showData = [];
		url = $scope.config.api_url + 'repos/' + $scope.config.repo_name + '/milestones?state=' + state;
		MyService.getData(url).then(function (res) {
			$scope.setShowData(res.data);
		}).then(function () {
			// vm.closeModal('custom-modal-1');
		});
	};
	$scope.getMilestonesInList = function () {
		if ($scope.list.milestones && $scope.list.milestones.length === 0) {
			// vm.closeModal('custom-modal-1');
			MyService.getData($scope.config.api_url + 'repos/' + $scope.config.repo_name + '/milestones').then(function (res) {
				$scope.list.milestones = res.data;
			}).then(function () {
				// vm.closeModal('custom-modal-1');
			});
		}
	};
}]);
