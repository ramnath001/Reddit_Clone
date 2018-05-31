let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server')
let should = chai.should();
let expect = chai.expect;
;
chai.use(chaiHttp);


//Test case to create a new post
it('Should be able to create a new post', (done) => {
     const testQueryObject = [{"id":50226038286989,
                               "title":"Test Post",
                               "author":"abc",
                               "postBody":"Test Body",
                               "showComments":false,
                               "comments":[],"points":0,
                               "timestamp":"2018-05-31T12:28:05.918Z"}]
    chai.request(server)
      .post('/api/posts')
      .send(testQueryObject)
      .end((err, res) => {
        expect(err).to.not.exist
        expect(res.status).to.equal(200)
        done()
      })
  })


//Test case to add a new comment to the post
it('Should be able to add a comment to a post', (done) => {
     const testQueryObject = [{"id":50226038286989,
                               "title":"Test Post",
                               "author":"abc",
                               "postBody":"Test Body",
                               "showComments":false,
                               "comments":[{"commenter":"ramnath","commentBody":"test comment"}],
                               "points":0,
                               "timestamp":"2018-05-31T12:28:05.918Z"}]
    chai.request(server)
       .post('/api/posts/50226038286989/comments')
       .send(testQueryObject)
       .end((err, res) => {
         expect(err).to.not.exist
         expect(res.status).to.equal(200)
         done()
      })
  })


//Test case to increase the vote count
it('Should be able to add a vote count', (done) => {
     const testQueryObject = [{"id":50226038286989,
                               "title":"Test Post",
                               "author":"abc",
                               "postBody":"Test Body",
                               "showComments":false,
                               "comments":[{"commenter":"ramnath","commentBody":"test comment"}],
                               "points":3,
                               "timestamp":"2018-05-31T12:28:05.918Z"}]
    chai.request(server)
       .post('/api/posts/50226038286989?q=add')
       .send(testQueryObject)
       .end((err, res) => {
         expect(err).to.not.exist
         expect(res.status).to.equal(200)
         done()
      })
  })

//Test case to get all the available posts
it('Should be able to get all the posts', (done) => {
    const testQueryObject = { name: 'UOB Invest Domestic Equity Fund' }
    chai.request(server)
      .get('/api/posts')
      .query(testQueryObject)
      .end((err, res) => {
        expect(err).to.not.exist
       expect(res.status).to.equal(200);
        done()
      })
  })



