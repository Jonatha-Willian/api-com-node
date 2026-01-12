import express from 'express';
import helmet from 'helmet';
import router from './routes';
import passport from 'passport';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(passport.initialize())

server.use('/', router);

server.listen(3000, () => {
    console.log('Servidor rodando: http://localhost:3000/');
});