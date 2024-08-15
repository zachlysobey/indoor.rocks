"use server";
import { getDb } from "@/db/drizzle";
import { users } from "@/db/schema";

export const getUserData = async () => {
  const db = await getDb();
  const data = await db.select().from(users);
  return data;
};
