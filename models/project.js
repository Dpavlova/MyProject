var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    projectName: {type: String, required: true},
    clientName: {type: String, required: true},
    estTime: {type: Number, required: true},
    timeUsed: {type: Number}
});

module.exports = mongoose.model('Project', schema);