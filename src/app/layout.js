/* eslint-disable @next/next/next-script-for-ga */
// root-layout.jsx
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../public/assets/style/customStyle.scss";
import HeaderNavbar from "./header/header";
import Footer from "./footer/footer";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Online Reputation Management Services | ORM Techies</title>
        <meta
          name="description"
          content="Trusted Online Reputation Management Services by ORM Techies. Specializing in personal branding, reputation repair, and proactive management. Contact us now!"
        />
        <link rel="canonical" href="https://www.ormtechies.com/" />
        <meta name="robots" content="index, follow" />
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="WRnUipEdUORvYwjBMoasRBifV44oaePJxnUK-WFmies"
        /> 

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3Z6RYNC4LT"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3Z6RYNC4LT');
            `,
          }}
        />
      </head>
      <body>
        <HeaderNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
