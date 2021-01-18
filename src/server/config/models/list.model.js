const mongoose = require('../database');
const Item = require('./item.model');

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    itens: {
        type: [Item],
    }
});

const List = mongoose.model('List', ListSchema);

module.exports = List;