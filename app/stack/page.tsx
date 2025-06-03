import { Metadata } from "next";

import next from "@/public/next-logo.svg";
import react from "@/public/react-logo.svg";
import tailwind from "@/public/tailwindcss-logo.svg";
import typescript from "@/public/typescript-logo.svg";
import auth from "@/public/auth-logo.svg";
import code from "@/public/vscode-logo.svg";
import figma from "@/public/stacks/figma-logo.svg";
import git from "@/public/stacks/git-icon.svg";
import github from "@/public/stacks/github-logo.svg";
import vercel from "@/public/stacks/vercel-logo.svg";
import redux from "@/public/stacks/redux-logo.svg";
import postgres from "@/public/stacks/postgresql-logo.svg";
import Image from "next/image";
//productivity icons
import calendar from "@/public/stacks/google-calendar.svg";
import chat from "@/public/stacks/chatgpt-logo.svg";
import spotify from "@/public/stacks/spotify-icon.svg";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Stack"
};

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
  {
    url: figma,
    title: "Figma",
    desc: "Design Tool",
  },
  {
    url: git,
    title: "Git",
    desc: "Version Control",
  },
  {
    url: github,
    title: "Github",
    desc: "Hosting for Git",
  },
  {
    url: postgres,
    title: "PostgreSql",
    desc: "Database",
  },
  {
    url: redux,
    title: "Redux",
    desc: "The state of a web application",
  },
  {
    url: vercel,
    title: "Vercel",
    desc: "Hosting Provider",
  },
];

const productivity = [
  {
    path: "https://open.spotify.com/",
    url: spotify,
    title: "Spotify",
    desc: "Music",
  },
  {
    path: "https://chatgpt.com/",
    url: chat,
    title: "ChatGPT",
    desc: "Ai",
  },
  {
    path: "https://calendar.google.com/",
    url: calendar,
    title: "Google Calender",
    desc: "Calender",
  },
];

export default function Stack() {
  return (
    <main className="max-w-[1400px] w-full mx-auto pt-3 lg:pt-7">
      <section>
        <h1 className="scroll-m-20 text-4xl font-semibold  tracking-normal lg:text-5xl">
          My Stack
        </h1>
        <p className="leading-7 text-muted-foreground mt-4">
          Software and tools I use on a regular basis.
        </p>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full mt-10">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Development
            </h3>
          </div>

          <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5">
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
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full mt-10">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Productivity
            </h3>
          </div>

          <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5">
            {productivity.map((prod) => (
              <Link
                href={prod.path}
                target="_blank"
                key={prod.title}
                className="flex items-center gap-x-4 p-3 hover:bg-primary/10 rounded-lg cursor-pointer"
              >
                <div className="relative h-12 w-12 overflow-hidden">
                  <Image src={prod.url} alt={prod.title} fill />
                </div>
                <div>
                  <h3 className="font-semibold">{prod.title}</h3>
                  <p className="text-sm dark:text-[#858585] text-[#717171]">
                    {prod.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
