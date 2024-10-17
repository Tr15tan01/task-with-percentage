"use client";

import { DialogComponent } from "@/components/dialog";
import { TasksComponent } from "@/components/tasks";
import { getTasksByUser } from "@/actions/fetchtasks";
// import { TaskSchema } from "@/schemas";
import { useEffect, useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { SkeletonBig } from "@/components/skeleton-big";

interface TaskProps {
  id: string;
  userId: string;
  title: string;
  description: string;
}

const CardPage = () => {
  const user = useCurrentUser();
  console.log(user);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasksByUser(user?.id);
      setTasks(tasks);
      setLoading(false);
      // console.log(tasks, "tasks");
      return tasks;
    };

    fetchTasks();
  }, [user?.id]);

  return (
    <>
      {/* <div className="w-full flex justify-between">
        <NavigationMenuComponent />
        <ModeToggle />
      </div> */}
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-stone-900 gap-3">
        <h1>All tasks Are Here</h1>
        {loading && (
          <>
            <SkeletonBig /> <SkeletonBig />
          </>
        )}
        {tasks?.map((task) => {
          return (
            <TasksComponent
              id={task.id}
              userId={task.userId}
              title={task.title}
              description={task.description}
              key={task.id}
            />
          );
        })}
        <DialogComponent />
      </div>
    </>
  );
};
export default CardPage;
