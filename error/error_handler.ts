
import { type Request,type Response,type NextFunction } from "express";
export const error_handler = (error:any,req:Request,res:Response,next:NextFunction)=>{
    res.status(500).json({message:'Internal server error'})
}