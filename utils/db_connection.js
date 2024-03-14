import { MongoClient } from "mongodb";

export async function getDBConnection() {
    const connectionString = "mongodb://localhost:27017";
    const mongoClient = new MongoClient(connectionString);
    const clientPromise = await mongoClient.connect();
    const client = await clientPromise;
    const db = await client.db("vvm-tybvoc-2023-24-db");
    return { db, client };

}