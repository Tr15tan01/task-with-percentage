"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteTaskById = async (id: string) => {
  console.log("id is ", id);
  try {
    await db.task.delete(
      {
        where: {
          id,
        },
      },
      revalidatePath("/card")
    );
  } catch (error) {
    console.log(error, "fetch tasks error");
    return null;
  }
  revalidatePath("/card");
};
