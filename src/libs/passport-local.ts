//pratica comum de renomear a importação de Strategy para não ficar sempre o mesmo nome em todas as estratégias
import { Strategy as LocalStrategy } from "passport-local";
import { createUserToken, findUserByEmailAndPassword } from "../services/user";
import { User } from "../types/user";
import { RequestHandler } from "express";
import passport from "passport";

type LocaStrategyResponse = {
    auth:
    { token: string; },
    user: User
    }

export const locaStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
//segunda função que vai fazer o processo
}, async (email, password, done) => {
    console.log("email:", email, "password:", password);

    const user = await findUserByEmailAndPassword(email, password);
    // verifica se o user foi encontrado (não está null)
    if(user){
        const token = await createUserToken(user);
        const response: LocaStrategyResponse = {
            auth: { token },
            user
        }
        //retorna sem erro (null) e com o objeto de resposta
        return done(null, response);
    } else {
        return done(null, false);
    }

});  

export const LocalStrategyAuth: RequestHandler = (req, res, next) => {
    const authRequest = passport.authenticate('local', (err: any, response: LocaStrategyResponse | false) => {
        //caso a utenticação dê certo o user continaua no fluxo pra proxima rota
        if(response) {
            req.user = response.user;
            req.authInfo = response.auth;
            return next();
        }
        return res.status(401).json({error: "Acesso não autorizado"});
    });
    authRequest(req, res, next);
}