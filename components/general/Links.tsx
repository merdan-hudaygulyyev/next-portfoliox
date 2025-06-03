"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Stack",
    path: "/stack",
  },
  {
    title: "About",
    path: "/about",
  },
];

export function Links() {
  const pathname = usePathname();

  return (
    <div className="hidden sm:flex items-center gap-6">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className={`${
            pathname === link.path
              ? "text-blue-600 text-base font-semibold underline"
              : "text-base font-semibold"
          }`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
