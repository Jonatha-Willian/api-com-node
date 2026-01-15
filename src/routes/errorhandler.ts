import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundRequest: RequestHandler = (req, res) => {
    res.status(404).json({error: 'Rota não encontrada'})
};

export const errorhandler: ErrorRequestHandler = (err, req, res, next )=>{
    res.status(500).json({error: "Ocorreu um erro"});
    console.log(err);
}