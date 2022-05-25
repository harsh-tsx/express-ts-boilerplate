import {Request,Response,NextFunction} from 'express'


export function R(res:Response,status:boolean,message:String,data?:any) {
    res.json({
      status:status,
      message:message,
      data:data ?? {}
    })
  }
export const asyncWrapper = (fn:Function)=> async(req:Request,res:Response,next:NextFunction)=>{
    try{
        fn(req,res,next);
    }catch (e) {
        next(e)
    }
}