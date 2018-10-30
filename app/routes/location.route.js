const locationService = require('../services/location.service');
var schema = require('../schema/userValidationSchema.json')
var iValidator = require('../../common/iValidator');
var errorCode = require('../../common/error-code');
var errorMessage = require('../../common/error-methods');
var mail = require('./../../common/mailer.js');


function init(router) {
    router.route('/location/countries')
        .get(getAllCountries)
    router.route('/location/states')
        .get(getStates)
    router.route('/location/cities')
        .get(getCities)
    }

function getAllCountries(req,res) {
    locationService.getAllCountries().then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
}

function getStates(req,res) {
    var country_id = req.headers.country_id

    locationService.getStates(country_id).then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
}

function getCities(req,res) {
    var state_id = req.headers.state_id

    locationService.getCities(state_id).then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
}


module.exports.init = init;



