import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
    res.json({produtos: []});
});

router.post('/', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);

    res.json({produtos: []});
});

router.get('/:id', (req, res) => {
    const {id} = req.params;

    res.json({id, name: "Produto xyz", price: 90});
});

router.post('/adicionarProduto', (req, res) => {
    //receber os dados
    //processar os dados

    res.status(201).json({id: 123, name: "Produto xyz", price: 90})
})


export default router;