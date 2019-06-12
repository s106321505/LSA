var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var connect = require('./lib/connect')

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  // res.send('respond with a resource');
  const userName = (req.params.name);
  connect.get(userName)
  res.send(userName);
});

/* POST users listing. */
router.post('/:name/:age', function(req, res, next) {
  // res.send('respond with a resource');
  const userName = (req.params.name);
  const userAge = (req.params.age);
  // var data = {
  //   "user":{
  //     "name":userName,
  //     "age":userAge
  //   }
  // }
  res.send(data);
});

/* DELETE users listing. */
router.delete('/:name/:age', function(req, res, next) {
  // res.send('respond with a resource');
  const userName = (req.params.name);
  // var data = {
  //   "user":{
  //     "name":userName,
  //     "age":userAge
  //   }
  // }
  res.send(data);
});

/* PUT users listing. */
router.put('/:name', function(req, res, next) {
  // res.send('respond with a resource');
  const userName = (req.params.name);
  const userAge = (req.params.age);
  // var data = {
  //   "user":{
  //     "name":userName,
  //     "age":userAge
  //   }
  // }
  res.send(data);
});

module.exports = router;
