import { Inter } from "next/font/google";
import "./globals.css";
import TopNavComponent from "../components/topNav/topNav";
import Footer from "../components/footer /footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "Amazing Rentals in Germany", template: "%s | German Rentals" },
  description: "Apartments, houses and villas for rent in Germany",
  twitter: {
    card: "summary_large_image",
    title: "Amazing Rentals in Germany",
    description: "Apartments, houses and villas for rent in Germany",
    creator: "@amazingrentals",
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:w-5/6 w-full mx-auto mb-0 ">
          <TopNavComponent />
        </div>
        <main className="md:w-5/6 w-full mx-auto mb-0 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
