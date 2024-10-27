"use client";

// import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log("session is ", session, status);

  useEffect(() => {
    console.log("session is", session);
    console.log("satus is ", status);
  }, [session, status]);

  const onClick = () => signOut();
  return (
    <div className=" text-gray-600 h-full">
      {/* {JSON.stringify(user)} */}
      <div className="m-3">
        <h2>User is: </h2>
      </div>
      <button className="p-3 rounded-sm" onClick={onClick}>
        Sign Out
      </button>
      {/* <h1>Profile page</h1> */}
    </div>
  );
};
export default ProfilePage;
