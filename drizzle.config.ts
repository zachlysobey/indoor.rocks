import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env.local' });

const { DATABASE_PW } = process.env;

if (!DATABASE_PW) {
  throw new Error('make sure to export DATABASE_PW!');
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  verbose: true,
  dialect: "postgresql",
  dbCredentials: {
    host: '0.0.0.0',
    port: 5432,
    user: 'postgres',
    ssl: false,
    database: 'default',
    password: DATABASE_PW,
  },
});
