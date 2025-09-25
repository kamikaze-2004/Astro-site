"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Loader from "./Components/Loader";
import { Footer } from "./Components/Footer";
import { useEffect,useState } from "react";
import { ScrollToTopButton } from "./Components/ScrollToTop";
import { usePathname } from "next/navigation";
import ResponsiveNavBar from "./Components/ResponsiveNavbar";
import { Analytics } from '@vercel/analytics/next';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Astroclub AU",
  description: "Off Space club of AU",
  
};
const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Eyes", link: "/eyes" },
  { name: "NewsLetter", link: "/NewsLetter" },
  { name: "Events", link: "/events" },
  { name: "Team", link: "/team" },
  {name:'News',link:'/news'},
  { name: "Contact", link: "/contact" }
];


export default function RootLayout({ children }) {
  
  const path=usePathname();
  const [loading,setLoading] = useState(true);
  
  useEffect(()=>
    {
      const timer=setTimeout(()=>
        {
          setLoading(false);
        },2000)
        return ()=> clearTimeout(timer);
      },[])
      
      return (
        <html lang="en" style={{scrollBehavior:'smooth'}}>
      <title>Astroclub AU</title>
      <head><link rel='icon' href='/images/astrologo-circle.png' /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {loading ? <Loader/>:
       <div>       <ResponsiveNavBar navItems={navItems} className="fixed z-50  " />
        {children}
        <Analytics />
        <ScrollToTopButton/>
        </div>
        }
      {path != '/contact' &&
      <Footer/>}
      </body>
    </html>
  );
}
