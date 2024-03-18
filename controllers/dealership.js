import dbConnection from "../db/mongodb.config.js";

import { faker } from "@faker-js/faker";

// export const Dealer = faker.helpers.multiple(
//   () => {
//     return { 
//       dealership_id: faker.string.uuid(),
//       dealership_email:faker.internet.email(),
//       dealership_name:faker.internet.userName(),
//       dealership_location:faker.location.city(),
//       password:faker.internet.password(),
//       dealership_info:{
//         gender:faker.person.gender(),
//         bio:faker.person.bio(),
//         jobTitle:faker.person.jobTitle(),
//         jobType:faker.person.jobType(),
//       }
//      };
//   },
//   { count: 15,}
// );


export const create = async()=>{
    const db = await dbConnection();
    const collection = await db.collection("dealership");
    // const coll_car = await db.collection("cars").find().toArray();
    // const coll_deals = await db.collection("deal").find().toArray();
    // const coll_sold = await db.collection("sold_vehicles").find().toArray();
    // let cars = coll_car?.map((item)=> item.car_id);
    // let deals = coll_deals?.map((item)=> item.deal_id);
    // let sold = coll_sold?.map((item)=> item.vehicle_id);

    // Dealer.forEach((item)=>{item.cars = cars; item.deals = deals; item.sold_vehicles = sold });
    // await collection.insertMany(Dealer);  
} 

export const update = async (id)=>{
    const db = await dbConnection();
    const collection = await db.collection("dealership");
    await collection.updateOne({ dealership_email:"dealership@gmail.com" }, [
      { $set: { dealership_location:"Mumbai" } },
    ]);
  }
  
  export const findAll = async ()=>{
    const db = await dbConnection();
    const collection = await db.collection("dealership");
    const res = await collection.find().toArray();
    console.log(res);
  }
  
  export const delete_ = async (id)=> {
    const db = await dbConnection();
    const collection = await db.collection("dealership");
    try {
      collection.deleteOne({ dealership_id:id });
    } catch (e) {
      print(e);
    }
  }