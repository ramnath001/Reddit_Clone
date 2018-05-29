angular.module("RedditCtlr", ["ngAnimate"]).controller("RedditController", [
  "$scope",
  "$http",
  "postService",
  function($scope, $http, postService) {
   
    // Don't show the newPostForm initially:
    $scope.showNewPostForm = false;
    $scope.showNewCommentForm = false;
    $scope.toggleComments = false;

    // Toggle form as needed:
    $scope.toggleNewPostForm = function toggleNewPostForm() {
      if ($scope.showNewPostForm) {
        $scope.showNewPostForm = false;
      } else {
        $scope.showNewPostForm = true;
      }
    };

/*
 * This function calls the create post service which intiates an http request to the server
 */
    $scope.createNewPost = function createNewPost() {
      console.log($scope.newPostForm);

      postService.createPost($scope.newPostForm).success(function(data) {
        //$scope.loading = false;
        console.log("in create " + data);
        $scope.newPostForm = {}; // clear the form so our user is ready to enter another
        $scope.posts = data;
        console.log(data); // assign our new list of todos
      });
      $scope.showNewPostForm = false;
    };

  /*
 * This function calls the create comment service which intiates an http request to the server
 */
    $scope.createNewComment = function createNewComment(pid) {
      var newComment = {};
      newComment.commenter = this.newCommentForm.commenter;
      newComment.commentBody = this.newCommentForm.commentBody;
      console.log("commentform " + JSON.stringify(newComment));
      console.log(pid);

      postService.createComment(newComment, pid).success(function(data) {
        $scope.posts = data;
      });
      $scope.showNewPostForm = false;
    };

    $scope.addPoints = function addPoints(pid,action) {
      console.log(pid);

      postService.manipulatePoints(pid,action).success(function(data) {
        console.log(JSON.stringify(data));

        console.log("increment success " + data);

        $scope.posts = data;
        console.log(JSON.stringify(data));
      });
    };

    $scope.toggleNewCommentsForm = function toggleNewCommentsForm() {
      if (this.showNewCommentForm) {
        this.showNewCommentForm = false;
      } else {
        this.showNewCommentForm = true;
      }
    };

   
    $scope.toggleComments = function toggleComments(pid) {
      console.log(pid);
      for (var i in $scope.posts) {
        if ($scope.posts[i].id == pid) {
          $scope.posts[i].showComments = true;
        } else {
          $scope.posts[i].showComments = false;
        }
      }
      console.log($scope.posts);
    };

    
    $scope.toggleNewCommentsForm = function toggleNewCommentsForm() {
      if (this.showNewCommentForm) {
        this.showNewCommentForm = false;
      } else {
        this.showNewCommentForm = true;
      }
    };

   
    $scope.subtractPoints = function subtractPoints(pid,action) {
      console.log(pid);

      postService.manipulatePoints(pid,action).success(function(data) {
        console.log(JSON.stringify(data));

        console.log("decrement success " + data);

        $scope.posts = data;
        console.log(JSON.stringify(data));
      });
    };

    $scope.sortBy = "-points";
  }
]);