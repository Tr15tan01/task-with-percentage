import { LoginButton } from "@/components/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TasksImage from "./tasks.svg";

export default function Home() {
  return (
    <main className="flex h-[100vh] flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold drop-shadow-md">Task Manager</h1>
        <p className="text-white text-lg">Simple auth service</p>
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
    </main>
  );
}
