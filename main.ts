import { MongoClient } from 'mongodb';
import { ObjectId } from "mongodb"

import { ejemplo} from "./type.ts "

const MONGO_URL = Deno.env.get("MONGO_URL")
if(!MONGO_URL) throw new Error("MONGO URL NOT EXISTS")
const API_KEY = Deno.env.get("API_KEY")
if(!API_KEY) throw new Error("API_KEY DOESNT EXIST")

const client = new MongoClient(MONGO_URL)
await client.connect()
console.log("Conectado a la base de datos")
 
const dbName = 'API_REST';

await client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName); 
const userscollection = db.collection<ejemplo>('users');

const handler = async(req:Request):Promise<Response> =>{
  const method = req.method;
  const url = new URL(req.url)
  const path = url.pathname

  if (method === "GET"){ 
    const param = url.searchParams
    return new Response("Hola buenas")
    
  }else if (method === "POST"){
    const body = await req.json()
    
    
  }else if (method === "PUT"){
    const body = await req.json()

  }else if (method === "DELETE"){
    const param = url.searchParams

    
  }

  return new Response(JSON.stringify({error : "Method incorrecto"}))
}

Deno.serve({port : 3000}, handler)