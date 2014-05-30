app.controller('FriendController', function ($scope, friendService){
	$scope.test = 'Hey! My angular works :)';
		
	friendService.getFriends().success(function(data){

		$scope.friends = data.results;
		angular.forEach($scope.friends, function(friend){
			friend.friend_count = parseInt(friend.friend_count, 10);
		});

		$scope.sortOrder = false;
	});



	$scope.myFilter = function(friend) {
		if (friend.name.toUpperCase().indexOf($scope.searchText.toUpperCase()) != -1 ){
			return true;
		} else {
			return false;
		}
	}

})




