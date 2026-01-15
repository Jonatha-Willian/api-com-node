import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { findUserByToken } from '../services/user';
import { RequestHandler } from 'express';
import passport from 'passport';
import { User } from '../types/user';

export const bearerStrategy = new BearerStrategy(async (token, done) => {
    console.log("Token recebido:", token);
    const user = await findUserByToken(token);
    //verifica no "banco de dados" se o token é válido
    if(user){
        return done(null, user);
    } else {
        console.log("Token inválido");
        return done(null, false);
    }
});

export const BearerStrategyAuth: RequestHandler = (req, res, next) => {
    const authRequest = passport.authenticate('bearer', 
        (err: any, user: User | false) => {
            if(user) {
                req.user = user;
                return next();
            };
            return res.status(401).json({error: "Acesso não autorizado"});
        }
    );
    authRequest(req, res, next);
};