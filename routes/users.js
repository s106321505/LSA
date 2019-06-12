var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var connect = require('./lib/connect')

/* GET users listing. */
router.get('/:name', function (req, res, next) {
  const userName = (req.params.name);
  connect.get(userName, res);
});

/* POST users listing. */
router.post('/:name/:tel', function (req, res, next) {
  const userName = (req.params.name);
  const userTel = (req.params.tel);
  connect.post(userName, userTel, res)
});

/* DELETE users listing. */
router.delete('/:name', function (req, res, next) {
  const userName = (req.params.name);
  connect.delete(userName, res)
});

/* PUT users listing. */
router.put('/:name/:tel', function (req, res, next) {
  const userName = (req.params.name);
  const userTel = (req.params.tel);
  connect.put(userName, userTel, res)
});

module.exports = router;
