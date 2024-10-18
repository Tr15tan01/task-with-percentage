"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { deleteTaskById } from "@/actions/deletetask";
// import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { CheckboxForm } from "./subtask-component";
import { SubtaskDialogComponent } from "./subtask-dialog";
import { SubTaskComponent } from "./subtask-component";
import { getSubTasksByTask } from "@/actions/fetchsubtasks";
import { useEffect, useState } from "react";
// import { SubTaskSchema } from "@/schemas";
import { SkeletonSmall } from "./skeleton-sm";
// import { Router } from "next/router";
// import { getTasksByUser } from "@/data/fetchtasks";
// import { useCurrentUser } from "@/hooks/use-current-user";
// import { useEffect, useState } from "react";
// import { TaskSchema } from "@/schemas";
// import { deleteTaskById } from "@/data/deletetask";
interface TaskProps {
  id: string;
  title: string;
  description: string;
  userId: string;
}

interface SubTaskProps {
  subtitle: string;
  description: string;
  completed: boolean;
}

// const subTasks = [
//   { subtitle: "subtitle one", descrition: "descrition one" },
//   { subtitle: "subtitle two", descrition: "descrition two" },
// ];

// type CardProps = React.ComponentProps<typeof Card>;

export function TasksComponent(task: TaskProps) {
  const [subtasks, setSubTasks] = useState<SubTaskProps[]>();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const tasks = await getTasksByUser();
  //     console.log(tasks, "tasks");
  //     setTasks(tasks);
  //     return tasks;
  //   };

  //   fetchTasks();
  // }, []);

  // const router = useRouter();

  useEffect(() => {
    const fetchSubTasks = async () => {
      const subtasks = await getSubTasksByTask(task.id);
      console.log(subtasks, "subtasks");
      setSubTasks(subtasks);
      setLoading(false);
      return subtasks;
    };

    fetchSubTasks();
  }, []);

  if (!task) {
    return <h1>ho tasks</h1>;
  }

  const deleteTask = () => {
    deleteTaskById(task.id);
    console.log(task.id);
    console.log(task, "task id to see");
    // router.push("/card");
  };

  return (
    <Card className={"w-[580px]"}>
      <CardHeader>
        <CardTitle className="text-3xl capitalize">
          Title: {task.title}
        </CardTitle>
        <CardDescription>Description: {task.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {loading && <SkeletonSmall />}
          {subtasks?.length ? (
            subtasks.map((subtask, idx) => {
              return (
                <SubTaskComponent
                  key={idx}
                  subtitle={subtask.subtitle}
                  description={subtask.description}
                  completed={subtask.completed}
                  // taskId={task.id}
                />
              );
            })
          ) : (
            <p>This task has no subtasks</p>
          )}
          <Button variant="destructive" className="w-full" onClick={deleteTask}>
            Delete Task
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-[50%]">
          {/* <CheckIcon className="mr-2 h-4 w-4" />  */}
          Add Subtask
        </Button>
        <SubtaskDialogComponent taskId={task.id} />
      </CardFooter>
    </Card>
  );
}
