"use server";

import * as z from "zod";
// import { signIn } from "@/auth";
// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// import { AuthError } from "next-auth";
import { db } from "@/lib/db";
import { SubTaskSchema } from "@/schemas";
// import { getUserById } from "@/data/users";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// export const revalidateTasks = async () => {
//   revalidatePath("/card");
//   console.log("revalidated");
// };

export const addSubTask = async (values: z.infer<typeof SubTaskSchema>) => {
  const validatedFields = SubTaskSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!!!" };
  }
  // return {success: "Email Sent!"}
  const { userId, taskId, subtitle, description, completed } =
    validatedFields.data;

  // const user = await getUserById(userId);
  console.log("validatet fieldds", validatedFields);
  try {
    await db.subtask.create({
      data: {
        userId,
        taskId,
        subtitle,
        description,
        completed,
      },
    });
  } catch (error) {
    if (error) {
      console.log("error is ", error);
      error: "something went wrong!";
      return { error: "Invalid credentials" };
    }
  }
};
