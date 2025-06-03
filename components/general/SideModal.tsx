import Link from "next/link";
import { Button } from "../ui/button";

const Modal = ({ closeModal }: any) => {
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

        <Link className="hover:text-blue-500" href="/" onClick={closeModal}>
          Home
        </Link>
        <Link
          className="hover:text-blue-500"
          href="/stack"
          onClick={closeModal}
        >
          Stack
        </Link>
        <Link
          className="hover:text-blue-500"
          href="/about"
          onClick={closeModal}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Modal;
