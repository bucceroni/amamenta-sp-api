var db = require('../../config/database');
var dbFunc = require('../../config/db-function');

var userModel = {
   getAllUsers:getAllUsers,
   addUser:addUser,
   updateUser:updateUser,
   deleteUser:deleteUser,
   getUserById:getUserById
}

function getAllUsers() {
    return new Promise((resolve,reject) => {
        db.query('SELECT * FROM user',(error,rows,fields)=>{
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

function addUser(user) {
    return new Promise((resolve,reject) => {
        db.query("INSERT INTO user( city_id, email, password, name, nickname, gender, street, number, complement, district, postalcode)VALUES('"+user.city_id+"','"+user.email+"','"+user.password+"','"+user.name+"','"+user.nickname+"','"+user.gender+"','"+user.street+"','"+user.number+"','"+user.complement+"','"+user.district+"','"+user.postalcode+"')",(error,rows,fields)=>{
           if(error) {
               dbFunc.connectionRelease;
               reject(error);
           } else {
               dbFunc.connectionRelease;
               resolve(rows);
           }
         });
       });
}



















//template
function getUserById(id) {
    return new Promise((resolve,reject) => {
        db.query("SELECT * FROM test WHERE id ="+id.id,(error,rows,fields)=>{
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




function updateUser(id,user) {
    return new Promise((resolve,reject) => {
        db.query("UPDATE test set name='"+user.name+"',age='"+user.age+"',state='"+user.state+"',country='"+user.country+"' WHERE id='"+id+"'",(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });    
    })
}

function deleteUser(id) {
   return new Promise((resolve,reject) => {
        db.query("DELETE FROM test WHERE id='"+id+"'",(error,rows,fields)=>{
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


module.exports = userModel;

