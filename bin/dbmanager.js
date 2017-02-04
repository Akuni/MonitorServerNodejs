var col = {players:{}, temp:{}, status:{}};


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://nodeserver:nodepass@ds139979.mlab.com:39979/serverinfo";

col.temp.add(newTemp, callback){
	MongoClient.connect(url, 
		function(err, db){
			if(!err){
        		var collection = db.collection('temp');
        		collection.insertOne(temp,
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

col.temp.getLast(){

	MongoClient.connect();
}

col.temp.getAll(){
	MongoClient.connect(url, 
		function(err, db){
			if(!err){
        		var collection = db.collection('temp');
        		collection.find().toArray(function(err, items) {
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