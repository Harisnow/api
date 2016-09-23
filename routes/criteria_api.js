var express = require('express');
var router = express.Router();

router.get('/criteria/:like', function(req,res){
        var value = req.params.like;
        var cursor  =db.collection('criteria');
        var sections=cursor.find({'criteria' : { $regex: '^' + value, $options: 'i' } },{_id: 0}).toArray(function(err, docs) {
        res.json(docs);
        });
});

module.exports = router;
