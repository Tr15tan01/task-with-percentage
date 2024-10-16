"use server";

import { TaskSchema } from "@/schemas";
import * as z from "zod";
// import { signIn } from "@/auth";
// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// import { AuthError } from "next-auth";
import { db } from "@/lib/db";
// import { getUserById } from "@/data/users";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// export const revalidateTasks = async () => {
//   revalidatePath("/card");
//   console.log("revalidated");
// };

export const addTask = async (values: z.infer<typeof TaskSchema>) => {
  const validatedFields = TaskSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!!!" };
  }
  // return {success: "Email Sent!"}
  const { userId, title, description } = validatedFields.data;

  // const user = await getUserById(userId);
  // console.log(validatedFields, "validatet fieldds");
  try {
    await db.task.create({
      data: {
        userId,
        title,
        description,
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
