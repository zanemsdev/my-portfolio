import "./globals.css";
import { metaData } from "./data/config";
import Footer from "./components/Footer";
import NavBar from "./components/navbar/Navbar";
import Annoucement from "./components/items/Annoucement";

export const metadata = {
  title: metaData.title,
  description: metaData.description,
  keywords: metaData.keywords,
  robots: metaData.robots,
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
      <Annoucement />
        <div className="max-w-6xl mx-auto px-4 py-5">
          
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
