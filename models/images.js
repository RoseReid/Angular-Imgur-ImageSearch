
'use strict';


const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/imgurAPI';
var db  = mongoose.createConnection(url);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('mongoose is connected')
});


var imagesSchema = new mongoose.Schema({
  nsfw: {type:Boolean, required:true},
  title: {type:String}, 
  topic: {type:String}, 
  views:{type:String}, 
  id:{type:String, required:true}, 
  link:{type:String, required:true}
});


exports.Model = db.model('images', imagesSchema);
