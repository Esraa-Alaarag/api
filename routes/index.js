var express = require('express');
var router = express.Router();
var db = require('../db/queries');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zootopia' });
});
router.get('/api/information', db.getAllcitizens);
router.get('/api/information/:ss', db.getOnecitizen);
router.post('/api/information', db.createcitizen);
router.put('/api/information/:ss', db.updatecitizen);
router.delete('/api/information/:ss', db.deletecitizen);

module.exports = router;
