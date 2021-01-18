const express = require('express');
const List = require('../config/models/list.model');

const router = express.Router();

router.post('/create', async (req, res) => {
    const {name, itens} = req.body;

    try {
        const list = await List.create({name, itens});
        return res.status(201).send({ list })
    } catch(err) {
        console.log(err);
        return res.status(400).send({
            error: 'Não foi possível criar a lista, tente novamente!'
        });
    }
});

router.get('/find', async (req, res) => {
    const allLists = await List.find();
    return res.status(200).send({allLists});
}); 

router.put('/update/:id', async (req, res) => {
    const {id} = req.params;
    const {name, itens} = req.body;

    try {
        const list = await List.findOneAndUpdate({_id : id}, {$set : {
                "name": name,
                "itens": itens
            }},
            {new: true});

        return res.status(200).send({list});

    } catch (error) {
        console.log(error);
        return res.status(400).send({
            error: 'Não foi possível encontrar a lista desejada, tente novamente!'
        });
    }
});

module.exports = app => app.use('/api', router);