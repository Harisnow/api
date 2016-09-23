var express = require('express');
var router = express.Router();

router.get('/query', function(req,res){
        var value = req.params.like;
        var cursor  =db.collection('savedQueries');
        var sections=cursor.find().toArray(function(err, docs) {
        res.json(docs);
        });
});

module.exports = router;
