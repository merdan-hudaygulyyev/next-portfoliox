"use client";
import Link from "next/link";
import { Links } from "./Links";
import { DialogWindow } from "./Dialog";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import Modal from "./SideModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-5 flex items-center justify-between mb-4 ">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            <span className="bg-blue-600 rounded-md text-white p-2">
              Merdan's
            </span>
          </h1>
        </Link>
      </div>
      <Links />
      <div className="flex items-center gap-4">
        <DialogWindow />

        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon className="cursor-pointer" />
        </button>

        {isOpen && <Modal closeModal={() => setIsOpen(false)} />}
      </div>
    </nav>
  );
}