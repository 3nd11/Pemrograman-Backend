// (function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

// //UNIX=1642426339181
// //APP_KEY=9ujbwago9B746dgBiXBnJ5idKpCGQG9KmLZ738bAN6VW99f8oVfw9wSUWtJZzqnRuK5hfGJVIOGw3xgL1oTKmg

const mysql = require("mysql");

require("dotenv").config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

db.connect((err) => {
    if (err) {
        console.log(`Error Connecting ${err}`);
        return;
    } else {
        console.log("database online")
    }
});

module.exports = db;