app.factory('friendService', function ($http){
	return {
		getFriends: function(){
			return $http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json');
		}
	}
});