import { MongoClient } from "mongodb";
const connectionString = process.env.DB_URI || "";
const client = new MongoClient(connectionString);
let connect;
const dbname = "SmartIDy_DB"
try {
   connect = await client.connect();
} catch (e) {
   console.error(e);
}
let db = connect.db(dbname);
export default db;