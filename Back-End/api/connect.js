// javascript assincrono
// await async
//Fullfilled, a promeça foi completa

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://DBSp:vitor2004@cluster0.qy1lr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyproject");

const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
