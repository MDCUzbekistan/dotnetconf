import { Open_Sans } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Header from "@/components/header";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: ".NET Conf 2023",
  description:
    "Join the .NET Conf 2023 free event in November to learn about the newest developments across the .NET platform, open source, and dev tools. Mark your calendar!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <div className="container">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
