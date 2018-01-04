var express = require('express');
var router = express.Router();
var common_library = require('./common_library');
var cookieParser = require('cookie-parser');


/* GET home page. */
router.get('/', function(req, res) {	
  res.send('Fileupload Using nodejs,angularjs & mysql');
});

module.exports = router;
