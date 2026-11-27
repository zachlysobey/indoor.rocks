import type { SystemBoard } from "@/app/dataModel";
import { kilterBoard } from "./kilterBoard";
import { tensionBoard } from "./tensionBoard";
import { moonBoard } from "./moonBoard";
import { grasshopperBoard } from "./grasshopperBoard";
import { decoyBoard } from "./decoyBoard";

// In the order the system boards page lists them.
export const systemBoards: SystemBoard[] = [
  kilterBoard,
  tensionBoard,
  moonBoard,
  grasshopperBoard,
  decoyBoard,
];
