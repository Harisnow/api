var express = require('express');
var router = express.Router();

router.post('/queryname',function(req,res){
             var query = req.body;
             var cursor  = db.collection('savedQueries');
             var sections = cursor.remove(query);
             res.send("Query Deleted");
   });

module.exports = router;
