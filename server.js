
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const port = 8000;

const db = require('./config/db');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))



MongoClient.connect(db.url, { useNewUrlParser: true }, (err,dbase) =>{

	if(err){
		return console.log(err);
	}

	require('./index/noteRoutes')(app,dbase);
	app.listen(port, () => {
	console.log("We are live on "+ port);
})
})