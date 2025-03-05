import { type Request,type Response,type NextFunction } from "express";

export const authorization = () => (req:Request,res:Response,next:NextFunction)=>{
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}