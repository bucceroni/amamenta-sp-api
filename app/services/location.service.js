var locationModel = require("../models/location-model.js");


var locationService = {
    getAllCountries:getAllCountries,
    getStates:getStates,
    getCities:getCities
 }

function getAllCountries() {
    return new Promise((resolve,reject) => {
        locationModel.getAllCountries().then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function getStates(country_id) {
    return new Promise((resolve,reject) => {
        locationModel.getStates(country_id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function getCities(state_id) {
    return new Promise((resolve,reject) => {
        locationModel.getCities(state_id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}



module.exports = locationService;

