"use client";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/astroclub_au?igsh=MXgycG92d2Jva253dQ==", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/astro-club-au-31aa2834a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    , label: "LinkedIn" },
  { icon: Mail, href: "mailto:astroclubau@gmail.com", label: "Email" },
];

const footerLinks = [
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Events", href: "/events" }
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Apod", href: "#apod" },
      { label: "Eyes",href:'/eyes'},
      {label:'News',href:'/news'}
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function Footer() {

  const router = useRouter();
 

  return (
    <footer className="relative z-20 border-t-2 border-white/10 bg-black/30 backdrop-blur-md bottom-0">
      <div className="mx-auto max-w-full   px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          <div className="grid space-y-2">
           <div> <img
              src="/images/astrologo.png"
              alt="Astroclub AU Logo"
              className="h-48 w-48 ml-20 scale-150 lg:ml-32 rounded-3xl transform-all duration-300 ease-in-out hover:scale-110"
              onClick={()=>{window.scrollTo({top:0,behavior:'smooth'})}}
            />
            </div>
            <p className="text-sm text-gray-300 max-w-md">
              Exploring the cosmos, one discovery at a time. Join us in our mission to understand the universe and inspire the next generation of astronomers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-lime-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
  href={link.href}
  onClick={(e) => {
    if (link.href === '#apod') {
       e.preventDefault();
      router.push('/')
      const apodSection = document.getElementById('apod');
      if (apodSection) {
        apodSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (link.href) {
      router.push(link.href); 
    }
  }}
  className="text-sm text-gray-400 hover:text-lime-400 transition-colors"
  whileHover={{ x: 5 }}
  transition={{ duration: 0.2 }}
>
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Astroclub AU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}