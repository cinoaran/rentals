import { Inter } from "next/font/google";
import "./globals.css";
import TopNavComponent from "../components/topNav/topNav";
import Footer from "../components/footer /footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "Amazing Rentals in Germany", template: "%s | German Rentals" },
  description: "Apartments, houses and villas for rent in Germany",
  metadataBase: new URL('https://acme.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazing Rentals in Germany",
    description: "Apartments, houses and villas for rent in Germany",
    creator: "@amazingrentals",
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <div className="md:w-[90%] w-full mx-auto mb-0 ">
          <TopNavComponent />
        </div>
        <main className="md:w-[90%] sm:w-full mx-auto mb-0">{children}</main>
        <div className="md:w-[90%] w-full mx-auto mb-0 ">
          <Footer />
        </div>
      </body>
    </html>
  );
}
