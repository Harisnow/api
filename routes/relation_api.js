var express = require('express');
var router = express.Router();
var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://10.219.85.98", neo4j.auth.basic("neo4j", "password"));
var session = driver.session();

router.get('/relation', function(req,res){
        session.run("MATCH (user:Profile)-[r]-(term) where labels(term) in ['skills','location','organization','roles','qualification'] return DISTINCT type(r)")
        .then(function(result) {
          var relations = [];
          result.records.forEach(function(record) {
            relations.push(record._fields[0]);
          })
          res.json(relations);
        },function(err) {
          console.log(err);
          res.status(500).send(err);
        });
        // var value = req.params.like;
        // var cursor = db.collection('relations');
        // var sections = cursor.find({'relation' : { $regex: '^' + value, $options: 'i' } }).toArray(function(err, docs) {
        // res.json(docs);
        // });
    });

module.exports = router;
