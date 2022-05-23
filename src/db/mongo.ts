import mongoose from "mongoose";
import env from "../config/db";

export const initDb = async ()=>{
    if (mongoose.connections[0].readyState) {
		
		return  console.log("already connected");
	}

	mongoose.connect(
		// "mongodb+srv://harsh:1Wx1fkJ8IxY2Z08u@cluster0.qdude.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
		// "mongodb://swagrixidb:esdabjarcoco@127.0.0.1:27017/sms9",
		env.URI,
		
	);
	mongoose.connection.on("connected", () => {
		return console.log("Connected to mongo");
		
	});
	mongoose.connection.on("error", (err) => {
		return console.log("mongo err:", err);
		
	});
}