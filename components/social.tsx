import { FcGoogle } from "react-icons/fc";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex items-center justify-center w-full gap-x-4">
      <Button onClick={() => onClick("google")}>
        google <FcGoogle className="mx-4" />
      </Button>
      <Button onClick={() => onClick("github")}>
        Github <FaGithub className="mx-4" />
      </Button>
    </div>
  );
};
export default Social;
