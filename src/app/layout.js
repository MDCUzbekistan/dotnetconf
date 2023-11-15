import { Open_Sans, Space_Grotesk } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/home/footer/footer";
import Image from "next/image";

const inter = Open_Sans({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: ".NET Conf 2023",
  description:
    "Join the .NET Conf 2023 free event in November to learn about the newest developments across the .NET platform, open source, and dev tools. Mark your calendar!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <div className="wrapper">
          <Image
            className="bg-ellipse bg-ellipse-1"
            src="/ellipses/ellipse-1.svg"
            alt="Background gradient ellipse"
            width={2014}
            height={2336}
          />
          <Image
            className="bg-ellipse bg-ellipse-2"
            src="/ellipses/ellipse-2.svg"
            alt="Background gradient ellipse"
            width={2014}
            height={1501}
          />
          <Image
            className="bg-ellipse bg-ellipse-3"
            src="/ellipses/ellipse-3.svg"
            alt="Background gradient ellipse"
            width={2014}
            height={1462}
          />
          <Image
            className="bg-ellipse bg-ellipse-4"
            src="/ellipses/ellipse-4.svg"
            alt="Background gradient ellipse"
            width={2014}
            height={1232}
          />
          <Image
            className="bg-ellipse bg-ellipse-5"
            src="/ellipses/ellipse-5.svg"
            alt="Background gradient ellipse"
            width={2014}
            height={1853}
          />
          <div className="container">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
