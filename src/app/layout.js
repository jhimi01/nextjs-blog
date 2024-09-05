import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const poppins = Poppins({weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Venture",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
          <link rel="icon" href="/favicon.ico" />
          {/* Add additional icon sizes for better compatibility */}
          <link rel="icon" type="image/png" href="/logo.png" />
        </head>
      <body className={poppins.className}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
