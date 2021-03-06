const express = require('express');

const app = express();

const index = require('./routes/index');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));

require('./controller/list.controller')(app);

app.use(index);

module.exports = app;