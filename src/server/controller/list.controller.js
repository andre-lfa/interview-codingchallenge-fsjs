const express = require('express');
const List = require('../config/models/list.model');

const router = express.Router();

router.post('/create', async (req, res) => {
    const {name, itens} = req.body;

    try {
        const list = await List.create({name, itens});
        return res.send({ list })
    } catch(err) {
        console.log(err);
        return res.status(400).send({
            error: 'Não foi possível criar a lista, tente novamente!'
        });
    }
});

module.exports = app => app.use('/api', router);