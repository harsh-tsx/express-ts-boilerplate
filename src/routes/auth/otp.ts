import express,{Request,Response} from "express";
import { asyncWrapper, R } from "@helpers/response-helpers";
import Joi from "joi";
import User from "@model/User";
import { sendSms } from "@helpers/common";
const router = express.Router();


router.get("/send-otp",asyncWrapper(async(req:Request,res:Response)=>{
    const schema = Joi.object({
        email_phone: Joi.string().required(),
    }).validate(req.body);

    if (schema.error) {
        return R(res,false,schema.error.message);
    }

    const data = schema.value;

    sendSms(data.email_phone)

    return R(res,true,"OTP sent to your mobile no.",{});

}))

export default router;
