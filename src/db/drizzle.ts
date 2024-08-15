import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

config({ path: '.env.local' });

const { DATABASE_PW } = process.env;

if (!DATABASE_PW) {
  throw new Error('make sure to export DATABASE_PW!');
}

const client = new Client({
  host: '0.0.0.0',
  port: 5432,
  user: 'postgres',
  password: DATABASE_PW,
  database: 'default',
  ssl: false,
});

const db = drizzle(client);
const connectionPromise = client.connect();

export const getDb = async () => {
  await connectionPromise;
  return db;
};
