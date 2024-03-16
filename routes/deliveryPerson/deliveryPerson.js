import { Router } from 'express';
var router = Router();
import {getDBConnection} from '../../utils/db_connection.js';
/* GET users listing. */
export default async function getDeliveryPerson(req, res, next) {
  const {db, client} = await getDBConnection();
  const userCollection = await db.collection("deliveryPerson").find({});
  const userArray = await userCollection.toArray()
  res.send(userArray);
}