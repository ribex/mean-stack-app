var dbconn = require('../data/dbconnection.js');
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {

    var db = dbconn.get();
    var collection = db.collection('hotels');

    var offset = 0;
    var count = 5;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }


    collection.find()
    .skip(offset)
    .limit(count)    
    .toArray(function(err, docs) {
        console.log("Found hotels", docs);
        res
            .status(200)
            .json(docs);
    });

 };

module.exports.hotelsGetOne = function(req, res) {
    var hotelId = req.params.hotelId;
    var thisHotel = hotelData[hotelId];
    console.log("GET hotelId", hotelId);
    res
      .status(200)
      .json( thisHotel );
};

module.exports.hotelsAddOne = function(req, res) {
    console.log("POST new hotel");
    console.log(req.body);
    res
        .status(200)
        .json(req.body);
};