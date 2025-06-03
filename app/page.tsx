import Stacks from "@/components/general/Stacks";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Merdan's | Everything releated to Web Development in one place",
    template: "%s | Merdan's",
  },
};

export default function Home() {
  return (
    <main className="max-w-[1400px] w-full  mx-auto pt-3 lg:pt-7">
      <section className="w-full flex flex-col items-center lg:w-[70%] mx-auto ">
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-semibold text-center  tracking-normal lg:text-5xl xl:text-6xl">
          Everything releated to Web Development in one place
        </h1>
        <p className="leading-7 text-muted-foreground mt-4  text-center lg:w-[70%] lg:text-lg">
          Your one-stop destination for all things web development, from the
          latest updates to in-depth tutorials and resources.
        </p>

        <div className="gap-x-5 flex mt-5">
          <Link
            className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  h-11 rounded-md px-8"
            href="https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI"
          >
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
              className="lucide lucide-video mr-2 h-4 w-4"
            >
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
              <rect x="2" y="6" width="14" height="12" rx="2"></rect>
            </svg>
            Courses in Youtube
          </Link>
          <Link
            className="inline-flex items-center justify-center bg-gray-200 hover:bg-gray-200/75 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-secondary-foreground  h-11 rounded-md px-8"
            href="/about"
          >
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
              className="lucide lucide-person-standing mr-2 h-4 w-4"
            >
              <circle cx="12" cy="5" r="1"></circle>
              <path d="m9 20 3-6 3 6"></path>
              <path d="m6 8 6 2 6-2"></path>
              <path d="M12 10v4"></path>
            </svg>
            About Merdan
          </Link>
        </div>
      </section>

      <div className="mt-10">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              My Stack
            </h3>
            <p className="text-sm text-muted-foreground">
              Software and tools I use on a regular basis.
            </p>
          </div>
          <div className="p-6 pt-0 grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5 ">
            <Stacks />
          </div>
          <div className="flex items-center p-6 pt-0 w-full">
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
              href="/stack"
            >
              View more
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
