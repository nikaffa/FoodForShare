//Util file for Node Geocoder library
const nodeGeocoder = require('node-geocoder');
//require("dotenv").config({ path: '.env' });
require("dotenv").config();

const options = {
  //provider: process.env.GEOCODER_PROVIDER,
  provider:'mapquest',
  //fetch: customFetchImplementation,
  httpAdapter: 'https',
  apiKey: '6AXC29ieH1U8LZGWR6t3TlvapEXt81xo',
  formatter: null
};

const geocoder = nodeGeocoder(options);

// Using callback
//const res = await geocoder.geocode('29 champs elysée paris');

//Forward address
const getcoordinates = geocoder.geocode('2975 atlantic ave coquitlam canada')
  .then((res)=> {
    console.log(res);
  })
  .catch((err)=> {
    console.log(err);
  });

// Reverse address
// geocoder.geocode('37.4396, -122.1864')
//   .then(function(res) {
//     console.log(res[0].formattedAddress);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

module.exports = { getcoordinates };