"use client";

import { DialogComponent } from "@/components/dialog";
import { TasksComponent } from "@/components/tasks";
import { getTasksByUser } from "@/actions/fetchtasks";
// import { TaskSchema } from "@/schemas";
import { useEffect, useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { SkeletonBig } from "@/components/skeleton-big";
// import { useSession } from "next-auth/react";

interface TaskProps {
  id: string;
  userId: string;
  title: string;
  description: string;
}

const CardPage = () => {
  const user = useCurrentUser();
  // const session = useSession();
  // const user = session.data?.user;
  console.log("user is - ", user);
  const [loading, setLoading] = useState(false);
  // const [tasks, setTasks] = useState<TaskProps[] | null>(null);
  console.log("loading is ", loading);
  const [tasks, setTasks] = useState<TaskProps[] | null>(null);

  useEffect(() => {
    // Ensure that fetchTasks only runs when the user is defined
    console.log("user id from Effect is - ", user?.id);
    if (!user?.id) return;
    console.log("user id from Effect is - ", user.id);

    const fetchTasks = async () => {
      setLoading(true); // Start loading
      try {
        const tasks = await getTasksByUser(user.id); // Fetch tasks for the user
        setTasks(tasks ?? []); // Set tasks or empty array if null
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false); // Always stop loading
      }
    };

    fetchTasks();
  }, [user?.id]); // Depend on user ID

  if (!user) {
    return <SkeletonBig />; // Or any other loading component
  }

  if (loading) {
    return (
      <>
        <SkeletonBig /> <SkeletonBig />
      </>
    );
  }

  return (
    <>
      {/* <div className="w-full flex justify-between">
        <NavigationMenuComponent />
        <ModeToggle />
      </div> */}
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-stone-900 gap-3">
        <h1>All tasks Are Here</h1>
        {/* {loading && (
          <>
            <SkeletonBig /> <SkeletonBig />
          </>
        )} */}
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
