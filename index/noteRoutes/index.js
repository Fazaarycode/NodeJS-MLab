
const noteRoutes = require ('./note_Routes');

 module.exports = function (app, db){
 	noteRoutes(app,db);
 }