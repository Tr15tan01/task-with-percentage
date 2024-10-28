"use client";

// import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  console.log("session is ", session, status);

  if (status === "loading") return <p>Loading...</p>;

  if (!session) return <p>Not logged in</p>;

  const onClick = () => signOut();

  return (
    <div className=" text-gray-600 h-full">
      {/* {JSON.stringify(user)} */}
      <div className="m-3">
        <h2>User is: </h2>
        <p>Logged in as {session.user?.name}</p>;
      </div>
      <button className="p-3 rounded-sm" onClick={onClick}>
        Sign Out
      </button>
      {/* <h1>Profile page</h1> */}
    </div>
  );
};
export default ProfilePage;
