var express = require('express');
var router = express.Router();

var ctrlHotels = require ('../controllers/hotels.controllers.js');

router
  .route('/json')
  .get(ctrlHotels.hotelsGetAll);

module.exports = router;