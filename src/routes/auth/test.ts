import express,{Request,Response} from "express";
const router = express.Router();

import { asyncWrapper, R } from "@helpers/response-helpers";
router.get("/hi",(req,res,next)=>{

    res.send("hello")

})

router.get("/test",asyncWrapper(async(req:Request,res:Response)=>{
    return R(res,true,"hello",{})
}))

export default router;
