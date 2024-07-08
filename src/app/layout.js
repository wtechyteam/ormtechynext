
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../../public/assets/style/customStyle.scss"
import HeaderNavbar from "./header/header";
import Footer from "./footer/footer";

import { metadata } from "./data/metaData";


export default function RootLayout({ children }) {


  return (
    <html>
      <body>
        
           <HeaderNavbar />
          {children}
           <Footer />

      </body>
    </html>
  );
}
export function generateMetadata(){
  return{
    title:"Online Reputation Management Services | ORM Techies",
    description:"Trusted Online Reputation Management Services by ORM Techies. Specializing in personal branding, reputation repair, and proactive management. Contact us now!"
  }
}