"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { revalidatePath } from "next/cache";

// import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import { addTask } from "@/actions/addtask";
import { useCurrentUser } from "@/hooks/use-current-user";
import { SubTaskSchema } from "@/schemas";
import { useState, useTransition } from "react";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { redirect } from "next/navigation";
import { addSubTask } from "@/actions/addsubtask";

export function SubTaskForm({ task }) {
  const user = useCurrentUser();
  // console.log(user);

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof SubTaskSchema>>({
    resolver: zodResolver(SubTaskSchema),
    defaultValues: {
      subtitle: "",
      description: "",
      userId: user?.id,
      taskId: task.id,
      completed: false,
    },
  });

  const onSubmit = (values: z.infer<typeof SubTaskSchema>) => {
    // setError("");
    // setSuccess("");
    // revalidateTasks();
    console.log(values, "values, sunbitted");
    startTransition(() => {
      addSubTask(values).then((data) => {
        console.log("data", data);
        console.log(data?.error, "is error");
        // revalidateTasks();
        setError(data?.error);
        setSuccess(data?.success);
      });
      redirect("/card");
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        // action={revalidateTasks}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="subtitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Task</FormLabel>
              <FormControl>
                <Input
                  placeholder="New SubTask..."
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormDescription>
                Enter New Task Name And Hit Enter.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="Description..."
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormDescription>
                Enter New Task Name And Hit Enter.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>userId</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="email"
                  type="hidden"
                  disabled={isPending}
                  value={user?.id}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="taskId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>taskId</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="email"
                  type="hidden"
                  disabled={isPending}
                  value={user?.id}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
