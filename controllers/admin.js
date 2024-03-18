import { faker } from "@faker-js/faker";
import { adminCollection } from "../model/admin.js";

export const create = async (req, res) => {
  const collection = await adminCollection();
  const admin = {
    admin_id: faker.string.uuid(),
    password: faker.internet.password(),
  };
  try {
    collection.insertOne(admin);
    res.send(admin);
  } catch (err) {
    res.send("something went wrong");
  }
};

export const update = async (req, res) => {
  const collection = await adminCollection();
  try {
    const resp = await collection.updateOne({ admin_id: req.params.id }, [
      { $set: { password: "123@mongo" } },
    ]);
    res.send(resp);
  } catch (err) {
    print(err);
  }
};

export const findAll = async (req, res) => {
  const collection = await adminCollection();
  const admin = await collection.find().toArray();
  res.send(admin);
};

export const delete_ = async (req, res) => {
  const collection = await adminCollection();
  try {
    const resp = await collection.deleteOne({ admin_id: req.params.id });
    res.send(resp);
  } catch (err) {
    print(err);
  }
};
