import dbConnection from "../db/mongodb.config.js";



export const create = async()=>{
    const db = await dbConnection();
    const collection = await db.collection('user');
    // try{
    //    collection.insertMany(User);
    // }catch(err){
    //     console.warn(err);
    // }
    
}

export const update = async (email)=>{
    const db = await dbConnection();
    const collection = await db.collection("user");
    await collection.updateOne({ user_email: email }, [
      { $set: { password: "123@mongo" } },
    ]);
  }
  
  export const findAll = async ()=>{
    const db = await dbConnection();
    const collection = await db.collection("user");
    const res = await collection.find().toArray();
    console.log(res);
  }
  
  export const delete_ = async (id)=> {
    const db = await dbConnection();
    const collection = await db.collection("user");
    try {
      collection.deleteOne({ user_id:id });
    } catch (e) {
      print(e);
    }
  }

