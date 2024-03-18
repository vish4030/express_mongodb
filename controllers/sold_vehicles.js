import dbConnection from "../db/mongodb.config.js";


export const create = async () => {
  const db = await dbConnection();
  const collection = await db.collection("sold_vehicles");

//   const collection_car = await db.collection("cars").find().toArray();
//   for(let i=0, j=0; i<100; i=i+4,j++)
//   {
//     Vehicle[j].car_id = collection_car[i].car_id;
//     Vehicle[j].vehicle_info = collection_car[i].car_info;
//   }
//  collection.insertMany(Vehicle);

  
};

export const update = async (id) => {
  const db = await dbConnection();
  const collection = await db.collection("sold_vehicles");
  await collection.updateOne({ vehicle_id: id }, [
    { $set: { vehicle_info: {} } },
  ]);
};

export const findAll = async () => {
  const db = await dbConnection();
  const collection = await db.collection("sold_vehicles");
  const res = await collection.find().toArray();
  console.log(res);
};

export const delete_ = async (id) => {
  const db = await dbConnection();
  const collection = await db.collection("sold_vehicles");
  try {
    collection.deleteOne({ vehicle_id: id });
  } catch (e) {
    print(e);
  }
};
