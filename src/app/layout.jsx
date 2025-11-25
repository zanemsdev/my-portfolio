import "./globals.css";
import { metaData } from "./data/config";
import Footer from "./components/Footer";
import NavBar from "./components/navbar/Navbar";
import Annoucement from "./components/items/Annoucement";
import Providers from "./components/darkmod/Provider";
import { GoogleTagManager } from '@next/third-parties/google'
 
export const metadata = {
  title: metaData.title,
  description: metaData.description,
  keywords: metaData.keywords,
  robots: metaData.robots,
} 

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-5N63RKZG" />
      <body>
      <Providers>
      <Annoucement />
        <div className="max-w-6xl mx-auto px-4 py-5">
          
          <NavBar />
          {children}
          <Footer />
          <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="rchevalier" data-description="Support me on Buy me a coffee!" data-message="Envoyez moi un peu de soutiens dans mes projets " data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
        </div>
        </Providers>
      </body>
    </html>
  );
}
