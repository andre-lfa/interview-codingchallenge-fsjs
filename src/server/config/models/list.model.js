const mongoose = require('../database');

const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    itens: {
        type: [String],
    }
});

const List = mongoose.model('List', ListSchema);

module.exports = List;