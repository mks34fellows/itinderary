const path = require('path');
const yelpSearch = require('./api/yelp');
const reverseLoc = require('./api/google');
const db_connection = require('../db/db.js');

module.exports = function (app) {
  // Handles post request from action
  app.post('/yelp', (req, res) => {
    const term = req.body.searchTerm;

    // Converts Lat/Long to string version of city
    reverseLoc(req.body.latitude, req.body.longitude).then((data) => {
      const location = data.data.results[0].formatted_address;

      // Sends yelpSearch results to client
      yelpSearch(location, term).then((data) => {
        data.businesses.forEach((business) => {
          var name = business.name;
          var phone_number = business.display_phone;
          var rating = business.rating;
          var image = business.image_url;
          var address = business.location.display_address.join(', ');

          db_connection.query("SELECT * FROM Activities WHERE phone_number = ?", [phone_number], (err, rows) => {
            if(err) throw err;

            if(rows.length === 0){
              db_connection.query("INSERT INTO Activities SET ?", {name, address, phone_number, rating, image}, (err, info) => {
                if(err) throw err;
                console.log('Row inserted!');
              })
            }
          });
        })
        
        res.send(data);
      })
    });
  }); 
};


