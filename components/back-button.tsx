import Link from "next/link";
import { Button } from "./ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant="link" className="text-gray text-center w-full">
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
