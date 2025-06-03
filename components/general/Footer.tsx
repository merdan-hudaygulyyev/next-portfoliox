import Link from "next/link";

const links = [
  {
    path: "https://www.youtube.com",
    title: "Youtube",
  },
  {
    path: "https://www.linkedin.com/in/merdan-hud-9124a6347",
    title: "LinkedIn",
  },
  {
    path: "https://github.com/merdan-hudaygulyyev",
    title: "GitHub",
  },
];

export function Footer() {
  return (
    <div className="w-full mb-10 mt-32">
      <footer className="w-full mb-10 mt-32">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold">
              <span className="bg-blue-600 rounded-md text-white p-2">
                Merdan's
              </span>
            </h1>
            <p className="text-md max-w-xs leading-6 text-muted-foreground">
              Your one-stop destination for all things web development, from the
              latest updates to in-depth tutorials and resources
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
            <div className="md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900  dark:text-gray-200">
                Social Media
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex flex-col gap-4">
                  {links.map((link) => (
                    <Link
                      className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                      key={link.title}
                      href={link.path}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900  dark:text-gray-200">
                Company
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex flex-col gap-4">
                  <Link
                    className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                    href="/stack"
                  >
                    Stack
                  </Link>
                  <Link
                    className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                    href="/about"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 dark:border-gray-100/10 flex items-center justify-between">
          <p className="text-xs leading-5 text-muted-foreground">
            © 2025 Merdan Solutions FZ-LLC. All rights reserved.
          </p>

          <div className="flex items-center gap-x-2">
            <Link
              className="text-xs leading-5 text-muted-foreground"
              href="/terms"
            >
              Terms
            </Link>
            <Link
              className="text-xs leading-5 text-muted-foreground"
              href="/privacy"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
