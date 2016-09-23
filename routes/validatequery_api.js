var express = require('express');
var router = express.Router();

router.get('/queryname/:name',function(req,res){
             var query = req.params.name;
             var cursor  = db.collection('savedQueries');
             var sections = cursor.find({'queryName' : query}).toArray(function(err, docs) {
                res.json(docs);
              });
   });

module.exports = router;
