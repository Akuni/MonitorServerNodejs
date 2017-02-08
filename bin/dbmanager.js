var col = {players:{}, temp:{}, status:{}};


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://nodeserver:nodepass@ds139979.mlab.com:39979/serverinfo";

col.temp.add = function(newTemp, callback){
	MongoClient.connect(url, 
		function(err, db){
			if(!err){
        		var collection = db.collection('temp');
        		collection.insertOne(newTemp,
        			function(error, result){
        				if(!error){
        					return callback(result);
        				} else {
        					return callback(false);
        				}
        			});
			} else {
				return callback(false);
			}
		});
}

col.temp.getLast = function(callback){

		MongoClient.connect(url, 
		function(err, db){
			if(!err){
        		var collection = db.collection('temp');
        		collection.find().sort({timestamp:-1}).toArray(function(error, items) {
        			if(!error){
        					return callback(items[0]);
        				} else {
        					return callback(false);
        				}
        			});
			} else {
				return callback(false);
			}
		});

}

col.temp.getAll = function(callback){
	MongoClient.connect(url, 
		function(err, db){
			if(!err){
        		var collection = db.collection('temp');
        		collection.find().toArray(function(error, items) {
        			if(!error){
        					return callback(items);
        				} else {
        					return callback(false);
        				}
        			});
			} else {
				return callback(false);
			}
		});

}

module.exports = col;