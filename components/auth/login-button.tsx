"use client";

import { useRouter } from "next/navigation";

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
    console.log("LOGIN BUTTON CLICKED");
  };

  if (mode === "modal") {
    return <span>IMPLEMENT MODAL</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
