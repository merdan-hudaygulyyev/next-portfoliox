import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
//soc. icons import
import linkedin from "@/public/linkedin.svg";
import github from "@/public/github-2.svg";
import ImageContent from "@/components/general/ImageContent";
//my images

export const metadata: Metadata = {
  title: "About",
};

const src =
  "https://avatars.mds.yandex.net/i?id=425998e890c9b76c05945d235ad71ff7db5c57a5-4306866-images-thumbs&n=13";

const socialLink = [
  {
    path: "https://www.linkedin.com/in/merdan-hud-9124a6347/",
    title: "LinkedIn",
    follow: "20",
    icon: linkedin,
  },
];

const socLink2 = [
  {
    path: "https://github.com/merdan-hudaygulyyev",
    title: "Github",
    follow: "30",
    icon: github,
  },
];

export default function About() {
  return (
    <main className="max-w-[1400px] w-full px-4  md:px-8 mx-auto pt-3 lg:pt-7">
      <div>
        <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-12 row-span-2 md:col-span-6 h-full my-auto">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="relative w-20 h-20 overflow-hidden">
                <Image src={src} alt="user" fill className="object-cover" />
              </div>
              <h1 className="mb-8 text-4xl font-medium leading-tight">
                Hi, I'm Merdan 👋🏻 <br />
                <span className="text-muted-foreground ">
                  I create Websites
                </span>
              </h1>

              <Link
                className="flex items-center gap-1 text-blue-600 hover:underline"
                href="https://github.com/merdan-hudaygulyyev?tab=repositories"
              >
                See My Repositories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-12 md:col-span-6 h-full flex flex-col justify-center">
            {socialLink.map((link) => (
              <div
                key={link.title}
                className="space-y-1.5 p-6 flex flex-row relative"
              >
                <div className="relative w-12 h-12 overflow-hidden">
                  <Image src={link.icon} alt={link.title} fill />
                </div>
                <div className="ml-4">
                  <h2 className="scroll-m-20 text-lg font-medium tracking-tight transition-colors first:mt-0">
                    {link.title}
                  </h2>
                  <p className=" text-sm font-medium text-muted-foreground truncate">
                    {link.follow} followers
                  </p>
                </div>

                <Link
                  target="_blank"
                  className="absolute top-2 right-2 "
                  href={link.path}
                >
                  <button className="group/button cursor-pointer relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-blue-500 font-medium text-white transition-all duration-300 hover:w-24">
                    <p className="inline-flex whitespace-nowrap text-xs opacity-0 transition-all duration-200 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100">
                      Follow
                    </p>
                    <div className="absolute right-1.5">
                      <svg
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 fill-white"
                      >
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-12 md:col-span-6 h-full flex flex-col justify-center">
            {socLink2.map((link) => (
              <div
                key={link.title}
                className="space-y-1.5 p-6 flex flex-row relative"
              >
                <div className="relative w-12 h-12 overflow-hidden">
                  <Image src={link.icon} alt={link.title} fill />
                </div>
                <div className="ml-4">
                  <h2 className="scroll-m-20 text-lg font-medium tracking-tight transition-colors first:mt-0">
                    {link.title}
                  </h2>
                  <p className=" text-sm font-medium text-muted-foreground truncate">
                    {link.follow} followers
                  </p>
                </div>

                <Link
                  target="_blank"
                  className="absolute top-2 right-2"
                  href={link.path}
                >
                  <button className="group/button cursor-pointer relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-blue-500 font-medium text-white transition-all duration-300 hover:w-24">
                    <p className="inline-flex whitespace-nowrap text-xs opacity-0 transition-all duration-200 group-hover/button:-translate-x-2.5 group-hover/button:opacity-100">
                      Follow
                    </p>
                    <div className="absolute right-1.5">
                      <svg
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 fill-white"
                      >
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-12 text-3xl leading-snug">
            <div className="flex flex-col space-y-1.5 p-6">
              <p>
                I'm a Fullstack developer.
                <span className="text-muted-foreground ">
                  I mainly work with Next.js. Proficient in modern web
                  technologies including HTML5, CSS3, ECMAScript, ReactJS,
                  Redux, and TypeScript. Strong focus on creating responsive,
                  mobile-first designs using Tailwind CSS.
                </span>
              </p>
            </div>
          </div>
        </div>

        <ImageContent />
      </div>
    </main>
  );
}
