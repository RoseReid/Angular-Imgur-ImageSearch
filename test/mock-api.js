process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();
var expect = chai.expect;


chai.use(chaiHttp);

describe('am I returning the correct url for imgr', function () {
	it ('can be retrieved from server.js file', function(done){
  		chai.request(server)
    	.get('imgrUrl')
    	.end(function (err, response) {
      		expect("https://api.imgur.com/3/gallery/search/")
      		done();
    	});
	});
});


// I would put the imgur request itself into it’s own module with a function that takes in the query

// [4:17]  
// and make your code call that module

// [4:17]  
// THEN

// [4:17]  
// you can use mocking

// [4:17]  
// to mock that module

// [4:18]  
// to make sure the correct query reaches that module

// [4:18]  
// you don’t need to test that module

// [4:18]  
// just mock it to ensure your queries to the main bit are correct