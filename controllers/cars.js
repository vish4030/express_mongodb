import dbConnection from "../db/mongodb.config.js";




export const create = async()=>{
    const db = await dbConnection();
    const collection = await db.collection("cars");
    //collection.insertMany(Cars);
} 

export const update = async (id)=>{
    const db = await dbConnection();
    const collection = await db.collection("cars");
    await collection.updateOne({ car_id: id }, [
      { $set: { name:"thar" } },
    ]);
  }
  
  export const findAll = async ()=>{
    const db = await dbConnection();
    const collection = await db.collection("cars");
    const res = await collection.find().toArray();
    console.log(res);
  }
  
  export const delete_ = async (id)=> {
    const db = await dbConnection();
    const collection = await db.collection("cars");
    try {
      collection.deleteOne({ car_id:id });
    } catch (e) {
      print(e);
    }
  }