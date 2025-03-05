import { type Request,type Response,type NextFunction } from "express";

export const login = (req:Request, res:Response,next:NextFunction) => {
    try {
        res.redirect('/dashboard');
    } catch (error) {
        next(error);
    }
    
}
export const dashboard = (req:Request, res:Response,next:NextFunction) => {
    try {
        if (!req.user) {
            return res.redirect('/login');
        }
        res.send(`Welcome, ${req.user}!`);
    } catch (error) {
        next(error);
    }
    
}
export const logout = (req:Request,res:Response,next:NextFunction)=>{
    try {
        req.logout((error)=>{
            if(error){
                return next(error);
            }
            req.session.destroy((error:any)=>{
                if(error){
                    return next(error);
                }
                res.clearCookie("connect.sid");
                res.json({message:'log out successfully'}).redirect('/');
            });
           
        });
    } catch (error) {
        next(error);
    }
}