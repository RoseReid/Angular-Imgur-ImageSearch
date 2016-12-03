var express = require('express');               
var request = require ('request');   //helps with making requests to API's
var imgrUrl = "https://api.imgur.com/3/gallery/search/";     //Search the gallery with a given query string.

//is there middleware anywhere???

//why app? Can it be anything else?

var app = express(); //app refers to the express app

//app.use is middleware
app.use('/', express.static(__dirname + '/public'));    
//first thing - it will see if the request is one of the files is in the public before moving further. 
//dirname- after server starts - it goes from user/rose/dev and so on
console.log(__dirname) ///Users/rose/Desktop/dev/imgur/finalProjectImgur   but it might be different on someone elses computer
//__dirname is a global defined variable that Node has
//I need __dirname because the library being used needs the exact path and cannot work with relative
var searchImgr = function(searchQuery, cb){
	var queryString = {q: searchQuery}; //q is defined in the imgur API as the search parameter- they have some other q's defined
	var headers = {'Authorization':'Client-ID 71921621e716b8c'};
	var option = {
		url:imgrUrl, 
		qs:queryString,  //property names defined by the API for the request ?q=cat . Library that will url encode things not normally recognized.
		json:true,  //it will parse the result as Json so I don't get a string back
		headers:headers
		
	}; 		//the qs and q don't make sense.   //is qs a query string parser- why is it not there?


//better to have them stacked instead of line because it's easier to see changes in source control.
	//request API  - using request library to make a call to imgursAPI and I defined it in the URL 
	request.get(option, function (error, response, data) { //response will contain response with headers and data and other stuff
     // the request.get will take option as a parameter and a callback of error-check, response, data
      cb(data);  //cb is the callback function I sent in up there- it will take a parameter data
      //request is a module to make requests to other API //outgoing
    });
};
/////
//this handle search request is the same as 
/////
// var handleSearchRequest = function(req, res){
// 	searchImgr(req.query.q, function(data){   //and query.q here??
// 		res.json(data)
// }

// //Express get requests is listening for incoming requests from the client
// app.get('/search', handleSearchRequest);   //its easier to have files with routes and then just requests with modules

app.get('/search',function(req, res){
	console.log(req)
	var searchQuery = req.query.q;   //query.q is express breaking up request in different path- one query, parameter, path, data. //can get clients ip address and other client information about the client.
	var callback = function(data){  //two callbacks- this can cause callback hell. It's easier to use promises. .this is promise
		//req.q will send in the query requested from the client. 
		res.json(data);
		console.log("sent the data")
	};

	searchImgr(searchQuery, callback);  //calling the searchImg function with the parameters of searchQuery and callback. Callback is a function.
	console.log("end search")  //end search happens before sending the data
});

// app.post('/search', (req, res) => {
//   response.json(request.body);  //what is the body
// });
//I don't actually need a post. Post is often used when creating something or wanting to server to an action.
//get is used for searching or getting

//app.listen takes a (path/port, callback())
app.listen(3000, function () {  
  console.log('Example app listening on port 3000!');
});

console.log('end of code');

module.exports = app;


//callbacks handle async stuff
//when something is done- you call it. This is async- the code starts from the top and goes to the bottom- but continues with the next piece of code- it does not wait for io(input, output)
//when there's router- what does that mean?

//use app at application level/router level.
//cookie parser
//what are websockets -like express web sockets


//Things I want to learn

//what is cache

//header vs body  - client sends an HTTP request with a header and server responds with header and content(body) ?? am I right?