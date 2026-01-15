import express from "express";
import helmet from "helmet";
import path from 'path';
import router from './routes';
import { errorhandler, notFoundRequest } from "./routes/errorhandler";
import passport from "passport";
import { locaStrategy } from "./libs/passport-local";
import { bearerStrategy } from "./libs/passport-bearer";

const server = express(); 

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(express.static(path.join(__dirname, '../public')));

passport.use(locaStrategy);
passport.use(bearerStrategy);
server.use(passport.initialize());

server.use('/', router);

server.use(notFoundRequest);
server.use(errorhandler);



server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000, http://localhost:3000");
});