"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { InputForm } from "./input-form";
// import { SubtaskInputForm } from "./subtask-form";
import { SubTaskForm } from "./subtask-form ";

// interface TaskProps {
//   id: string;
//   title: string;
//   description: string;
// }

export function SubtaskDialogComponent({ taskId }: { taskId: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-500 w-[50%] m-3 shadow-lg">
          Add SubTask
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add SubTask</DialogTitle>
          <DialogDescription>
            Make changes to Tasks here. Click save when you are sure.
          </DialogDescription>
        </DialogHeader>
        <SubTaskForm taskId={taskId} />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
