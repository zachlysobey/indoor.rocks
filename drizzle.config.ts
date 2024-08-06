import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env.local' });

console.log('env', {
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_PW: process.env.DATABASE_PW,
});

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
