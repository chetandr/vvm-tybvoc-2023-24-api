import { Router } from 'express';
var router = Router();
import {getDBConnection} from '../../utils/db_connection.js';
/* GET users listing. */


export async function getUsers(req, res, next) {
  const {db, client} = await getDBConnection();
  const userCollection = await db.collection("users").find({});
  const userArray = await userCollection.toArray()
  res.send(userArray);
}

export async function addUsers(req,res,next) {
  const {db, client} = await getDBConnection();
  const body = req.body;
  const insertOperation = await db.collection("users").insertOne(body);
  res.send(insertOperation)
}

