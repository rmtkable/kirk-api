const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const sportsSchema = new Schema({
    heading: { type: String},
    img: {type: String},
    description: { type: String}
    
},);


const Sport = mongoose.model('Sport', sportsSchema);


module.exports = Sport;