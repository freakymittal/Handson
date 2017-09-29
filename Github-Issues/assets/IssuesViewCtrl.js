app.controller('IssuesCtrl', ['$scope', 'MyService', '$http', '$location', 'ModalService', '$timeout', function ($scope, MyService, $http, $location, ModalService, $timeout) {
	// $scope.$on('$routeChangeStart', function (scope, next, current) {
    //     if (next.$$route.controller != "Your Controller Name") {
    //         // Show here for your model, and do what you need**
    //         $("#yourModel").show();
    //     }
	// });
	$scope.go = function(path){
		$location.path(path);
	}
	var vm = this;
	
			vm.openModal = openModal;
			vm.closeModal = closeModal;
	
			initController();
	
			function initController() {
				vm.bodyText = 'This text can be updated in modal 1';
			}
			
			function openModal(id){
				ModalService.Open(id);
			}
	
			function closeModal(id){
				ModalService.Close(id);
			}
    $scope.data = {},
        $scope.CreateIssue = false;
        $scope.viewCreateIssue = function(bool){
            $scope.CreateIssue = bool;
		}
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
		MyService.getConfig().then(function(res){
			$scope.config = res;
			console.log($scope.config);
			$scope.issues.filterIssues('open');
		});
	}
	$scope.init();
	$scope.invertColor = function (color) {
		return MyService.invertColor(color);
	}
	$scope.setShowData = function (data) {
		if (data.length) $scope.showData = data;
		else {
			$scope.dataMessage = "No Results found, Search for another query. Clearing the query in 2sec....";
			$timeout(function(){
				$scope.issues.filterIssues('open');
			}, 2000)
		}
	}
	$scope.issues.filterpullrequest = function (data) {
		var filteredData = [];
		data.forEach(function (i) {
			if (!i.hasOwnProperty('pull_request')) {
				filteredData.push(i);
			}
		});
		return filteredData;
	}

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
	$scope.issues.getComments = function(id){
		var url = `${$scope.config.api_url}repos/${$scope.config.repo_name}/issues/${id}/comments`;
		MyService.getData(url).then(function(res){
			console.log(res);
		})
	}
    $scope.locationChange = function(path){
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
			if ($scope.issues.label) query = `repo:${$scope.config.repo_name}+label:` + $scope.issues.label;
			else {
				query = `repo:${$scope.config.repo_name}+` + $scope.issues.filters.replace('state:all', 'state:open state:closed').replace(/\s/g,'+');
			}
			url = `${$scope.config.api_url}search/issues?q=${query}&page=${$scope.issues.page}&per_page=${$scope.config.per_page}`;
		} else {
			url = `${$scope.config.api_url}repos/${$scope.config.repo_name}/issues?state=${$scope.issues.issue_state}&page=${$scope.issues.page}&per_page=${$scope.config.per_page}`;
		}
		MyService.getData(url).then(function (res) {
			if ($scope.issues.searchOption === 'filter') {
				$scope.setShowData($scope.issues.filterpullrequest(res.data.items));
			} else $scope.setShowData($scope.issues.filterpullrequest(res.data));
		}, function (rej) {
			if (rej.status === -1) console.log('Check your Internet Connection');
			else if (rej.status === 404) console.log('Check you repository and username');
			else if(rej.status === 422) $scope.setShowData([]);
			console.log(rej.data);
		}).then(function(){
			vm.closeModal('custom-modal-1');
		});
	}

	$scope.issues.filterIssues = function (state) {
        $scope.dataMessage = '';
        $scope.CreateIssue = false;
		$scope.issues.filters = '';
		$scope.issues.page = 1;
		$scope.clearData();
		$scope.issues.issue_state = state;
		$scope.issues.nextIssues();
		// vm.closeModal('custom-modal-1');
	}
	$scope.issues.filterResults = function () {
		$scope.clearData();
		$scope.issues.searchOption = 'filter';
		$scope.dataMessage = '';
		$scope.issues.nextIssues();
	}
	$scope.issues.addToFilter = function(filter){
		$scope.issues.filters += ' ' + filter;
	}
	$scope.issues.getIssuesByLabel = function (l) {
		$scope.clearData();
		$scope.issues.searchOption = 'filter';
		$scope.issues.label = l;
		$scope.issues.nextIssues();
	}
	$scope.clearData = function () {
		$scope.show = 'issues';
		$scope.issues.searchOption = '';
		$scope.issues.issue_state = '';
		$scope.issues.label = '';
	}
	$scope.getAllLabels = function () {
		// vm.openModal('custom-modal-1');
		$scope.show = 'labels';
		$scope.dataMessage = '';
		$scope.showData = [];
		url = `${$scope.config.api_url}repos/${$scope.config.repo_name}/labels`;
		$scope.getLabels(url).then(function (res) {
			$scope.setShowData(res.data);
		}).then(function(){
			// vm.closeModal('custom-modal-1');
		});
	}
	$scope.getLabels = function () {
		return MyService.getData(`${$scope.config.api_url}repos/${$scope.config.repo_name}/labels`);
	}
	$scope.getLabelsInList = function () {
		
		if($scope.list.labels && $scope.list.labels.length === 0){
			// vm.openModal('custom-modal-1');
		$scope.getLabels().then(function (res) {
			$scope.list.labels = res.data;
		}).then(function(){
			// vm.closeModal('custom-modal-1');
		});
		}
	}
	$scope.getMilestones = function (state = 'open') {
		// vm.openModal('custom-modal-1');
		$scope.dataMessage = '';
		$scope.show = 'milestones';
		$scope.showData = [];
		url = `${$scope.config.api_url}repos/${$scope.config.repo_name}/milestones?state=${state}`;
		MyService.getData(url).then(function (res) {
			$scope.setShowData(res.data);
		}).then(function(){
			// vm.closeModal('custom-modal-1');
		});
	}
	$scope.getMilestonesInList = function () {
		if($scope.list.milestones && $scope.list.milestones.length === 0){
			// vm.closeModal('custom-modal-1');
			MyService.getData(`${$scope.config.api_url}repos/${$scope.config.repo_name}/milestones`).then(function (res) {
				$scope.list.milestones = res.data;
			}).then(function(){
				// vm.closeModal('custom-modal-1');
			});
		}
	}
}]);