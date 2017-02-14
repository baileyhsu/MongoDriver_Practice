const MongoClient = require('mongodb').MongoClient


const url = 'mongodb://localhost:27017/myproject';
MongoClient.connect(url, function(err, db){
    if(err){
    	return console.dir(err);
    }
    console.log('Connected to Mongodb');
/*    InsertDocument(db, function(){
       db.close();
    }); */
/*    InsertDocuments(db, function(){
      db.close();
    });*/
/*    FindDocuments(db,function(){
    	db.close();
    });*/


 /*   QueryDocuments(db,function(){
    	db.close();
    });*/

 /*   UpdateDocuments(db,function(){
    	db.close();
    }); */

    DeleteDocuments(db,function(){
    	db.close();
    }); 

});

//Insert a single doc
const InsertDocument = function(db, callback){
    //get collection
    const collection = db.collection('users');
    //Insert docs
    collection.insert({
        name: 'Bailey Hsu',
        email: 'bailey.c.hsu@gmail.com',
    }, function(err, result){
       if(err){
       	return console.dir(err);
       }
       console.log('Inserted Document');
       console.log(result);
       callback(result); 

    });

};

const InsertDocuments = function(db, callback){
      const collection = db.collection('users');
      collection.insertMany([
      	{
         name : 'John Doe',
         email: 'John@test.com'
         },
         {
         name : 'Sam Smith',
         email : 'john@test1.com'
         },
         {
         name : 'John Doe2',
         email : 'john2@test1.com'
         }
         ], function(err, result){
         if(err){
         	console.dir(err);
         }
         console.log('Inserted ' +result.ops.length+ ' Documents');
          
         callback(result);
      });

}

const FindDocuments = function(db, callback){
      const collection = db.collection('users');
      collection.find({}).toArray(function(err,docs){
      	if(err){
      		return console.dir(err);
      	}
        console.log('Found the following records ');
        console.log(docs);
        callback(docs);

      })

}

const QueryDocuments = function(db, callback){
     const collection = db.collection('users');
     collection.find({'name': 'John Doe'}).toArray(function(err,docs){
      	if(err){
      		return console.dir(err);
      	}
        console.log('Found the following record ');
        console.log(docs);
        callback(docs);

      })

}


//update document
const UpdateDocuments = function(db, callback){
     const collection = db.collection('users');
     collection.updateOne({'name':'John Doe'},
        {$set: {email:'john@something.com'}}, function(err,result){
         if(err){
      		return console.dir(err);
      	}
        console.log('Updated Document ');
        callback(result);
        });

}


//delete document

const DeleteDocuments = function(db, callback){
 	 const collection = db.collection('users');
 	 collection.deleteOne({'name':'Bailey Hsu'}, function(err,result){
         if(err){
      		return console.dir(err);
      	}
        console.log('Document has been deleted ');
        callback(result);
        });

}


