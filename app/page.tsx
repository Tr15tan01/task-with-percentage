import { LoginButton } from "@/components/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TasksImage from "./tasks.svg";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-5">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold drop-shadow-md">Task Manager</h1>
        <p className=" text-lg m-6">Manage your work and visualize progress</p>

        <div>
          <LoginButton>
            <Button size="lg" className="bg-purple-700 px-12 my-12">
              Get Started
            </Button>
          </LoginButton>
          <Image
            priority
            src={TasksImage}
            height={300}
            width={420}
            alt="Follow us on Twitter"
          />
        </div>
      </div>
      <div className="w-[50%] my-9">
        <h2 className="text-2xl my-6">Why use Task Manager At All</h2>
        <p className=" text-lg">
          {" "}
          A task manager app is a powerful tool for staying organized and
          improving productivity. By allowing users to list, prioritize, and
          track tasks, it helps break down complex projects into manageable
          steps. Features like due dates, reminders, and progress tracking keep
          users on top of deadlines and reduce procrastination. Many apps also
          offer collaboration options, making it easier for teams to work
          together efficiently. Whether for personal or professional use, a task
          manager app ensures that nothing is forgotten, enhances time
          management, and reduces stress, providing a clear pathway to achieving
          goals with greater focus and ease.
        </p>
      </div>
    </main>
  );
}
