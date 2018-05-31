let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server')
let should = chai.should();
let expect = chai.expect;
;
chai.use(chaiHttp);

it('create post api testing', (done) => {
     const testQueryObject = [{"id":50226038286989,
                               "title":"te",
                               "author":"dqgh",
                               "postBody":"fdhg",
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


it('create post api testing', (done) => {
     const testQueryObject = [{"id":50226038286989,
                               "title":"te","author":"dqgh",
                               "postBody":"fdhg",
                               "showComments":false,
                               "comments":[{"commenter":"ramnath","commentBody":"test comment"}],
                               "points":0,
                               "timestamp":"2018-05-31T12:28:05.918Z"}]
    chai.request(server)
       .post('/api/comments/50226038286989')
       .send(testQueryObject)
       .end((err, res) => {
         expect(err).to.not.exist
         expect(res.status).to.equal(200)
         done()
      })
  })


