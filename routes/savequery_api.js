var express = require('express');
var router = express.Router();

router.post('/query/:query',function(req,res){
        var query = req.params.query;
        var parsed = JSON.parse(query);
        var cursor = db.collection('savedQueries');
        cursor.insert(parsed);
        res.send(false);
});

module.exports = router;
