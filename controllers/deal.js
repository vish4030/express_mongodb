import dbConnection from "../db/mongodb.config.js";





export const create = async()=>{
    const db = await dbConnection();
    const collection = await db.collection("deal");
    const collection_car = await db.collection("cars");
    //const ids = await collection_car.find().toArray();
  
   // ids?.forEach((item,i)=>{Deals[i].car_id = item.car_id })

    //collection.insertMany(Deals);
} 

export const update = async (id)=>{
    const db = await dbConnection();
    const collection = await db.collection("deal");
    await collection.updateOne({ deal_id: id }, [
      { $set: { car_id:"12" } },
    ]);
  }
  
  export const findAll = async ()=>{
    const db = await dbConnection();
    const collection = await db.collection("deal");
    const res = await collection.find().toArray();
    console.log(res);
  }
  
  export const delete_ = async (id)=> {
    const db = await dbConnection();
    const collection = await db.collection("deal");
    try {
      collection.deleteOne({ car_id:id });
    } catch (e) {
      print(e);
    }
  }