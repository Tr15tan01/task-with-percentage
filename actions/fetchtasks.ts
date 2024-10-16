"use server";

import { db } from "@/lib/db";

export const getTasksByUser = async (id: string | undefined) => {
  try {
    if (!id) return;
    const tasks = await db.task.findMany({
      where: {
        userId: id,
      },
    });
    console.log("tasks", tasks);
    return tasks;
  } catch (error) {
    console.log(error, "fetch tasks error");
    return null;
  }
};
