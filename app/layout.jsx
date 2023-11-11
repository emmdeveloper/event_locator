import Footer from "@components/Home/Footer";
import "./globals.css";
import Header from "@components/Home/Header";
import Fonts from "@components/Fonts";
import Providers from "@components/Providers";
export const metadata = {
  title: "NinjaSports",
  description: "Discover & share locations of recreative and sport events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="html">
      <body className=" bg-[#f6f1ed] scroll-smooth">
        <div className="max-w-[1240px] mx-auto min-h-full">
          <Providers>
            <Header />
            <Fonts />
            <main>{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
