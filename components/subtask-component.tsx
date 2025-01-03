"use client";

// import Link from "next/link";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { toast } from "@/hooks/use-toast";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
// } from "@/components/ui/form";
import { useState } from "react";

// const FormSchema = z.object({
//   mobile: z.boolean().default(false).optional(),
// });

interface SubTaskProps {
  subtitle: string;
  description: string;
  completed: boolean;
}

export function SubTaskComponent({
  subtitle,
  description,
}: // completed,
SubTaskProps) {
  // const form = useForm<z.infer<typeof FormSchema>>({
  //   resolver: zodResolver(FormSchema),
  //   defaultValues: {
  //     mobile: true,
  //   },
  // });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   });
  // }

  const [checked, setChecked] = useState(true);

  const onCheckChange = () => {
    console.log("changed");
    setChecked(!checked);
  };

  return (
    <div className="items-top flex space-x-2 border-2 rounded-sm  p-2 m-2">
      <input
        type="checkbox"
        id="terms1"
        checked={checked}
        onChange={onCheckChange}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {subtitle}
        </label>
        <p className="text-sm text-muted-foreground">{description}.</p>
      </div>
    </div>
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    //     <FormField
    //       control={form.control}
    //       name="mobile"
    //       render={({ field }) => (
    //         <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
    //           <FormControl>
    //             <Checkbox
    //               checked={field.value}
    //               onCheckedChange={field.onChange}
    //             />
    //           </FormControl>
    //           <div className="space-y-1 leading-none">
    //             <FormLabel>{subtitle}</FormLabel>
    //             <FormDescription>
    //               {description}{" "}
    //               <Link href="/examples/forms">mobile settings</Link> page.
    //             </FormDescription>
    //           </div>
    //         </FormItem>
    //       )}
    //     />
    //     {/* <Button type="submit">Submit</Button> */}
    //   </form>
    // </Form>
  );
}
