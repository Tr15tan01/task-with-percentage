"use server";

import { db } from "@/lib/db";

export const getSubTasksByTask = async (id: string | undefined) => {
  try {
    const subtasks = await db.subtask.findMany({
      where: {
        taskId: id,
      },
    });
    console.log("subtasks", subtasks);
    return subtasks;
  } catch (error) {
    console.log(error, "fetch tasks error");
    return null;
  }
};
