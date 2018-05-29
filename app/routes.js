module.exports = function(app) {
	 var posts = [];

//helper function to return all posts 
function getPosts(res) {
    return posts; 
  }

//helper function to return all comments
function getComments(res) {
    return posts; 
  }

//api to create a post and return a json array of all the posts
app.post("/api/posts", function(req, res) {
    console.log(req.body);
    var newPost = {};
    newPost.id = Math.floor(Math.random() * 100000000000000);
    newPost.title = req.body.title;
    newPost.author = req.body.author;
    newPost.postBody = req.body.postBody;
    newPost.showComments = false;
    newPost.comments = [];
    newPost.points = 0;
    newPost.timestamp = new Date();

    posts.push(newPost);
    console.log("add " + JSON.stringify(posts));

    getPosts(posts);
    res.json(posts);
});

app.post("/api/comments/:commentId", function(req, res) {
    console.log(req.body);

    var newComment = {};
    newComment.commenter = req.body.commenter;
    newComment.commentBody = req.body.commentBody;
    console.log(newComment);

    for (var i in posts) {
      if (posts[i].id == req.params.commentId) {
        posts[i].comments.push(newComment);
      }
    }

    getComments(posts);
    res.json(posts);
});

//api to increment the votes counter for a post
app.post("/api/posts/:postId", function(req, res) {
    console.log(req.body);

    for (var i in posts) {
      if (posts[i].id == req.params.postId) {
        posts[i].points += 1;
      }
    }

    res.json(posts);
  });



	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};