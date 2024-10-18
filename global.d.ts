// global.d.ts

import { PrismaClient } from "@prisma/client";

declare global {
  // Extend the global namespace to include a prisma property
  let prisma: PrismaClient | undefined;
}
