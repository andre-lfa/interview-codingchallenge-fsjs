const mongoose = require('../database');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String
    }
}); 

module.exports = ItemSchema;