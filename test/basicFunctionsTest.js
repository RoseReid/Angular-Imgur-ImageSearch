process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var imageMap = require("./public/js/app/imageMap");
var should = chai.should();
var assert = require(assert);

// chai.use(chaiHttp);

describe('imageMap', function() {
  it('returns the first element of an array', function() {
    var result = imageMap("<div> <img src='" + imgData.link+"' /> "+tagData+" </div>");

    assert.equal(result, "<div> <img src='" + imgData.link+"' /> "+tagData+" </div>");
  });
});



This isn't working as of yet