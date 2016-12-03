process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();
var expect = chai.expect;
// var assert = require('assert');


chai.use(chaiHttp);

describe('Is server serving an index.html file', function () {
	it ('can be retrieved from server.js file', function(done){
  		chai.request(server)
    	.get('localhost:3000')
    	.end(function (err, response) {
      		expect(200)
      		done();
    	});
	});
});



//test to mock the calls to imgur, so I can ensure I'm sending the correct data to imgur
  // describe('/GET ', () => {
  //     it('it should GET all the books', (done) => {
  //     });    chai.request(server)
  //           .get('../index.html')
  //           .end((err, res) => {
  //               res.should.have.status(200);
  //               res.body.should.be.a('array');
  //               res.body.length.should.be.eql(0);
  //             done();
  //           });
  //     });





//describe is like the heading
//it is within describe and there can be several little test within describe.
//expect is what I'm actually testing. If I send in an array and I know there will be 3 objects in it, then I can state that .......
