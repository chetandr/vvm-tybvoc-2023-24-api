import { Router } from 'express';
var router = Router();
import {getDBConnection} from '../../utils/db_connection.js';
/* GET users listing. */
export  async function getMerchant(req, res, next) {
  const {db, client} = await getDBConnection();
  const userCollection = await db.collection("merchant").find({});
  const userArray = await userCollection.toArray()
  res.send(userArray);
}

export async function addMerchant(req, res, next) {
  const {db, client} = await getDBConnection();
  const insertMerchant = await db.collection( "merchant" ).insertOne( req.body );
  console.log(`Inserted a new merchant with id: ${insertMerchant.insertedId}`);
  return res.status(201).send(insertMerchant)
}