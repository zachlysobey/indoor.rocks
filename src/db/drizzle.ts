import { config } from 'dotenv';
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { default as pg } from "pg";

config({ path: '.env.local' });

const { DATABASE_PW } = process.env;
console.log('env', { DATABASE_PW });

const client = new pg.Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: DATABASE_PW,
  database: "indoor-rocks-db",
});

void async function main () {
  try {
    await client.connect();
    console.log('connected!')
    const db = drizzle(client);
    console.log('db', db);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}();
