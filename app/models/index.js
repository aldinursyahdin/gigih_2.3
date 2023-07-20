const dbConfig = require("../config/database");
const mongoose = require("mongoose");


module.exports = {
    mongoose,
    url: dbConfig.url,
    song: require('./song.model.js')(mongoose)
}

