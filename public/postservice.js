
angular.module('PostService', [])

	// service to call http requests at the backend
	// each function returns a promise object 
	.service('postService', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/posts');
			},
			createPost : function(postData) {
				return $http.post('/api/posts', postData);
			},
			createComment : function(commentData,commentId) {
				return $http.post('/api/comments/'+ commentId, commentData);
			},
			incrementPoints : function(commentId){
				return $http.post('/api/posts/'+commentId);
			}
			
			
		}
	}]);