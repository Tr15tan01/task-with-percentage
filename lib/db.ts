/* eslint-disable no-var */
// import { PrismaClient } from "@prisma/client";

// declare global {
//   // eslint-disable-next-line no-var
//   var prisma: PrismaClient | undefined;
// }

// export const db = globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

import { PrismaClient } from "@prisma/client";

// Extend the global namespace
declare global {
  // Allow a global prisma variable that can be undefined
  var prisma: PrismaClient | undefined;
}

// Create a Prisma client instance, checking for an existing one in global
export const db = globalThis.prisma || new PrismaClient();

// Assign the Prisma client instance to global variable if not in production
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
