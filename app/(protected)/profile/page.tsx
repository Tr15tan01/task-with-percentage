"use client";

// import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";

const ProfilePage = () => {
  // const user = useCurrentUser();
  const onClick = () => signOut();
  return (
    <div className="bg-white text-gray-600">
      {/* {JSON.stringify(user)} */}

      <button className="p-3 rounded-sm" onClick={onClick}>
        Sign Out
      </button>
      {/* <h1>Profile page</h1> */}
    </div>
  );
};
export default ProfilePage;
