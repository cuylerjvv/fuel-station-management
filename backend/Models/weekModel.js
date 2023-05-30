const mongoose = require ('mongoose');
const databaseConnections = require('../databaseConnections');

const Schema = mongoose.Schema;

const weekSchema = new Schema ({
    firstDay: { type: Date, required: true}, 
    days: [{
        day: {type: Date, required: true}, 
        shifts: {
            dayshift: {
                cashier: {type: String, required: true}, 
                attendant: [{type: String, required: true}]
            },
            nightshift: {
                cashier: {type: String, required: true}, 
                attendant: [{type: String, required: true}]
            }
        }
    }]
})

const Week_D = databaseConnections.dixie.model("Week", weekSchema);
const Week_G = databaseConnections.gazelle.model("Week", weekSchema);

module.exports = {
    Week_D, 
    Week_G
}