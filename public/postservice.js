
angular.module('PostService', [])

	// service to call http requests at the backend
	// each function returns a promise object 
	.service('postService', ['$http',function($http) {
		return {

			//service to create a post
			createPost : function(postData) {
				return $http.post('/api/posts', postData);
			},

			//Adds a comment to the post
			createComment : function(commentData,postId) {
				return $http.post('/api/posts/'+ postId+'/comments', commentData);
			},

			//increase or decreases the votes based on the query param 'q'
			manipulatePoints : function(postId,action){
				return $http.post('/api/posts/'+postId+'?q='+action);
			}
			
			
		}
	}]);