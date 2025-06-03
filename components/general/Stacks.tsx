import Image from "next/image";
//svg icon imports
import next from "@/public/next-logo.svg";
import react from "@/public/react-logo.svg";
import tailwind from "@/public/tailwindcss-logo.svg";
import typescript from "@/public/typescript-logo.svg";
import auth from "@/public/auth-logo.svg";
import code from "@/public/vscode-logo.svg";

const stacks = [
  {
    url: next,
    title: "Next.js",
    desc: "Framework",
  },
  {
    url: typescript,
    title: "Typescript",
    desc: "Language",
  },
  {
    url: code,
    title: "VS Code",
    desc: "Code Editor",
  },
  {
    url: react,
    title: "React.js",
    desc: "Framework",
  },
  {
    url: tailwind,
    title: "Tailwind",
    desc: "Styling",
  },
  {
    url: auth,
    title: "Auth.js",
    desc: "Authentication",
  },
];

export default function Stacks() {
  return (
    <>
      {stacks.map((stack) => (
        <div
          key={stack.title}
          className="flex items-center gap-x-4 p-3 hover:bg-primary/10 rounded-lg"
        >
          <div className="relative h-12 w-12 overflow-hidden">
            <Image src={stack.url} alt={stack.title} fill />
          </div>
          <div>
            <h3 className="font-semibold">{stack.title}</h3>
            <p className="text-sm dark:text-[#858585] text-[#717171]">
              {stack.desc}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
