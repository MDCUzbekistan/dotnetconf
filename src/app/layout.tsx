import { Open_Sans, Space_Grotesk } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import Script from "next/script";
import { ToastProvider } from "@/components/toast/toast";

const inter = Open_Sans({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Microsoft Community Conf 2023 Uzbekistan",
  description:
    "Join the Microsoft Community Conf 2023 Uzbekistan free event in December 2 to learn about the newest developments across the .NET platform, open source, and dev tools.",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <ToastProvider>
          <div className="wrapper">
            <Image
              priority={true}
              rel="presentation"
              className="bg-ellipse bg-ellipse-1"
              src="/ellipses/ellipse-1.svg"
              alt="Background gradient ellipse"
              width={2014}
              height={2336}
            />
            <Image
              rel="presentation"
              className="bg-ellipse bg-ellipse-2"
              src="/ellipses/ellipse-2.svg"
              alt="Background gradient ellipse"
              width={2014}
              height={1501}
            />
            <Image
              rel="presentation"
              className="bg-ellipse bg-ellipse-3"
              src="/ellipses/ellipse-3.svg"
              alt="Background gradient ellipse"
              width={2014}
              height={1462}
            />
            <Image
              rel="presentation"
              className="bg-ellipse bg-ellipse-4"
              src="/ellipses/ellipse-4.svg"
              alt="Background gradient ellipse"
              width={2014}
              height={1232}
            />
            <Image
              rel="presentation"
              className="bg-ellipse bg-ellipse-5"
              src="/ellipses/ellipse-5.svg"
              alt="Background gradient ellipse"
              width={2014}
              height={1853}
            />
            <div className="container">
              <Header />
              <main className="main">{children}</main>
              <Footer />
            </div>
          </div>
        </ToastProvider>
        <Script
          type="text/javascript"
          src={`https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${process.env.NEXT_PUBLIC_BING_MAPS_KEY}`}
        />
      </body>
    </html>
  );
}
