// POST, GET, PUT, DELETE
//CRUD - CREATE READ UPDATE DELETE
// EndPoint
// Usar --watch ./arquivo da api para não precisar matar o terminal
// usar a DB do mongo, em network Access colocar "allow all ips"
//middleware uma função que acontece no mieo do caminho, ele coloca entre a requisição o tratamento com o use
// app.use(express.json()) toda a requisição em texto vira em json

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artist' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando a porta ${PORT}`);
});
