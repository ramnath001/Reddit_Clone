describe('RedditController Test', function() {
  beforeEach(module('redditClone')); // will be run before each it() function

  // we don't need the real factory here. so, we will use a fake one.
  var mockService = {
    mockPost: [{'title':'test-1', 'author':'Ram','points':0,'timestamp':'Sun May 20 2018 19:09:40 GMT+0800 (Malay Peninsula Standard Time)','postBody':'test-body'}], //just two elements initially
    createNewPost: function(content) {
      this.mockPost.push(content);
    }
  };

  // now the real thing: test spec
  it('should return notes array with two elements initially and then add one',
    inject(function($rootScope, $controller) { //injects the dependencies
      var scope = $rootScope.$new();

      // while creating the controller we have to inject the dependencies too.
      var ctrl = $controller('RedditController', {$scope: scope});

      // the initial count should be two
      expect(scope.mockPost.length).toBe(1);

      // enter a new note (Just like typing something into text box)
      scope.note = 'test3';

      // now run the function that adds a new note (the result of hitting the button in HTML)
      scope.createNewPost();

      // expect the count of notes to have been increased by one!
      expect(scope.mockPost.length).toBe(2);
    })
  );
});