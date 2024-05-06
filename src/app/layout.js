"use client"
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../../public/assets/style/customStyle.scss"
import HeaderNavbar from "./header/header";
import Footer from "./footer/footer";
import { usePathname } from "next/navigation";
import { metadata } from "./data/metaData";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function RootLayout({ children }) {

  const pathname = usePathname();
  const currentPageMeta = metadata.find(item => item.path === pathname);
  const metaTitle = currentPageMeta ? currentPageMeta.title : "Default Title";
  const metaDescription = currentPageMeta ? currentPageMeta.pageDescription : "Default-Description";

  return (
    <html>
      <body>
        <HelmetProvider>
          <Helmet>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={pathname} />
            <meta name="robots" content="index, follow" />
          </Helmet>
          {pathname === "/pages/getAQuote" ? null : <HeaderNavbar />}
          {children}
          {pathname === "/pages/getAQuote" ? null : <Footer />}
        </HelmetProvider>
      </body>
    </html>
  );
}
