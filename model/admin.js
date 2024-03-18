
import dbConnection from "../db/mongodb.config.js";


export const adminCollection = async()=> (await dbConnection()).collection("admin");


