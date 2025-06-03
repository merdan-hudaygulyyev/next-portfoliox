"use client";
import { LogIn } from "lucide-react";
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export function DialogWindow() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {session?.user ? (
        <div className="flex items-center gap-2 p-2">
          <div className="relative inline-block" ref={dropdownRef}>
            <Image
              src={session.user.image || ""}
              alt={session.user.name || ""}
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <span>{session.user.email}</span>
                  </li>
                  <div className="flex justify-center">
                    <Button
                      className="cursor-pointer w-full"
                      onClick={() => signOut()}
                      variant={"ghost"}
                    >
                      Sign out
                    </Button>
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Button
          onClick={() => signIn("github", { redirectTo: "/" })}
          variant="outline"
          className="bg-blue-500 hover:bg-blue-400 hover:text-white text-white p-5 cursor-pointer"
        >
          Sign in with Github
          <span>
            <LogIn />
          </span>
        </Button>
      )}
    </>
  );
}
