import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const session = useSession();
  if (session.data) {
    console.log("session data user from hook", session.data?.user);
    return session.data?.user;
  }
};
