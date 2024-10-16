import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "email is required",
  }),
  password: z.string().min(1, { message: "password is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "email is required",
  }),
  password: z
    .string()
    .min(6, { message: "password must be minimum 6 characters" }),
  name: z.string().min(4, { message: "name must be minium 4" }),
});

export const TaskSchema = z.object({
  userId: z.string(),
  title: z.string(),
  description: z.string(),
});

export const SubTaskSchema = z.object({
  userId: z.string(),
  taskId: z.string(),
  subtitle: z.string(),
  description: z.string(),
  completed: z.boolean(),
});
