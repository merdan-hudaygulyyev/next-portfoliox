"use client";
import Link from "next/link";
import { Button } from "../ui/button";
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

const Modal = ({ closeModal }: any) => {
  const pathname = usePathname();

  return (
    <div
      onClick={closeModal}
      className="fixed duration-300 z-50 left-0 top-0 w-full h-full flex justify-end bg-black/65"
    >
      <div className="p-10 bg-gray-100 w-[16em] flex flex-col gap-8">
        <Button
          className="w-2 absolute top-2 right-5 cursor-pointer"
          onClick={closeModal}
          variant="outline"
        >
          X
        </Button>

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
    </div>
  );
};

export default Modal;
