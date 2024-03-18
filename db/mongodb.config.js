import { MongoClient } from "mongodb";
import 'dotenv/config';

const url = `mongodb+srv://vishwajeetk4030:***********@cluster0.wacrhyu.mongodb.net/`;
const client = new MongoClient(url);

export default async function dbConnection(){
    await client.connect();
    console.log(" db connected successfully");
    const db = client.db("car_warehouse");
    return db;
}
