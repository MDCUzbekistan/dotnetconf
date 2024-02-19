import { Open_Sans, Space_Grotesk } from "next/font/google";
import "./reset.css";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import { ToastProvider } from "@/components/toast/toast";

const inter = Open_Sans({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "MDC Uzbekistan",
  description:
    "Microsoft Developers Community in Uzbekistan is a community of developers who are passionate about Microsoft technologies and want to share their knowledge with others.",
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
              role="presentation"
              className="bg-ellipse bg-ellipse-1"
              src="/ellipses/ellipse-1.svg"
              alt="Background gradient ellipse"
              width={2014}
              height={2336}
            />
            <Image
              role="presentation"
              className="bg-ellipse bg-ellipse-2"
              src="/ellipses/ellipse-2.svg"
              alt="Background gradient ellipse"
              width={2014}
              height={1501}
            />
            <Image
              role="presentation"
              className="bg-ellipse bg-ellipse-3"
              src="/ellipses/ellipse-3.svg"
              alt="Background gradient ellipse"
              width={2014}
              height={1462}
            />
            <Image
              role="presentation"
              className="bg-ellipse bg-ellipse-4"
              src="/ellipses/ellipse-4.svg"
              alt="Background gradient ellipse"
              width={2014}
              height={1232}
            />
            <Image
              role="presentation"
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
      </body>
    </html>
  );
}
