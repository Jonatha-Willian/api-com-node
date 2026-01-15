import express, { RequestHandler } from 'express';
import routerProdutos from './produtos';
import routerVoos from './voos';
import { LocalStrategyAuth } from '../libs/passport-local';
import { bearerStrategy, BearerStrategyAuth } from '../libs/passport-bearer';

const router = express.Router();
//router.use(interferir);

router.use('/produtos', routerProdutos);
router.use('/voos', routerVoos);

router.get('/', (req, res) => {
    let name: string = "Fulano da Silva";
    let age: number = 50;
    
    res.json({name, age});
});

router.get('/ping',  (req, res) => {
    res.json({pong: true});
});

router.get('/voos/:from/:to', (req, res) => {
    const {from, to} = req.params;
    res.json({
        flight:{
            from: from.toUpperCase(),
            to: to.toUpperCase(), 
            price: 1200 }})
});

router.post('/login', LocalStrategyAuth, async (req, res) => {
    return res.json({
        user: req.user,
        auth: req.authInfo
    });
});

router.get('/private', BearerStrategyAuth, (req, res) => {
    res.json({message: "Rota privada acessada com sucesso!"});
});
export default router;