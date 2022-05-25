import { Schema, model, Document,Types } from "mongoose";

export interface User extends Document {
  name: String,
  email:String,
  email_verified:Boolean,
  phone:Number,
  address:Array<Types.ObjectId>,
  
}

const UserSchema: Schema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  email_verified: {
    type: Boolean
  },
  phone: {
    type: Number
  },
  address: [{ type : Types.ObjectId, ref: 'Address' }],
});



export default model<User>("User", UserSchema);
