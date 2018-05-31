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
    getPosts(posts);
    res.json(posts);
});

//api to create a comment for a particular post
app.post("/api/posts/:postId/comments", function(req, res) {
   
    var newComment = {};
    newComment.commenter = req.body.commenter;
    newComment.commentBody = req.body.commentBody;
    
    for (var i in posts) {
      if (posts[i].id == req.params.postId) {
        posts[i].comments.push(newComment);
      }
    }

    getComments(posts);
    res.json(posts);
});

/*api to increment or decrement the votes counter for a post
*the votes are increased or decreased based on the value of the query parameter
*/
app.post("/api/posts/:postId", function(req, res) {
    
    var actionToPerform = req.query.q;
    for (var i in posts) {
      if (posts[i].id == req.params.postId) {
      	if(actionToPerform == 'add'){
         posts[i].points += 1;
         break;
      }
      else if(actionToPerform == 'sub'){
      	posts[i].points -= 1;
      	break;

      }
    }
  }
    res.json(posts);
  });


//Api to get all the posts
app.get("/api/posts", function(req, res) {
    
    res.json(posts);
});

    /* Route to handle landing page of the application
     * redirects to index.html on load
     */
	
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};