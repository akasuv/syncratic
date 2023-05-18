import SearchInput from "@/components/SearchInput";
import "./globals.css";
import clsx from "clsx";
import { Inter, Varela_Round, Noto_Sans } from "next/font/google";

const varela = Varela_Round({ weight: "400", subsets: ["latin"] });
const notoSans = Noto_Sans({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Syncratic",
  description: "Foster intellectual growth and curiosity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <div className="flex flex-col md:flex-row w-full gap-y-8 items-center justify-between p-8 mb-4">
          <div className="flex items-center">
            <a
              className={clsx(varela.className, "text-3xl cursor-pointer")}
              href="/"
            >
              Syncratic
            </a>
            <nav className="pl-16">
              <ul className="flex gap-x-8">
                <li>
                  <a
                    href="/topics"
                    className="font-bold text-black hover:underline"
                  >
                    Topics
                  </a>
                </li>
                <li>
                  <a
                    href="/topics"
                    className="font-bold text-black hover:underline"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href="/topics"
                    className="font-bold text-black hover:underline"
                  >
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <SearchInput placeholder="Search Syncratic" />
        </div>
        {children}
      </body>
    </html>
  );
}
