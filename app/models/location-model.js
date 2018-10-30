var db = require('../../config/database');
var dbFunc = require('../../config/db-function');

var locationModel = {
   getAllCountries:getAllCountries,
   getStates:getStates,
   getCities:getCities
}

function getAllCountries() {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM country',(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows[0]);
            }
       });
    });
}

function getStates(country_id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM state WHERE country_id ='+country_id,(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });
}

function getCities(state_id) {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM city WHERE state_id ='+state_id,(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });
}

module.exports = locationModel;

