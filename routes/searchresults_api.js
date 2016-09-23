var express = require('express');
var router = express.Router();

router.post('/searchresults', function(req,res) {
  var query = "MATCH ";
  var where= "WHERE ";
  var searchExpression = req.body;
  searchExpression.forEach(function(expression,index) {
    var relation = "r"+index;
    var criteria = "criteria"+index;
    query += "(user:Profile)-["+relation+"]-("+criteria+"),";
    where += expression.openP + relation + ".relationName ='" + expression.relationVal + "' AND " + criteria + ".term ='" + expression.valueVal+ "'"+expression.closeP+" "+expression.operator +" ";
  });
  query = query.substring(0, query.length-1);
  query += " "+ where + " return user";
  console.log(query);
});

module.exports = router;
