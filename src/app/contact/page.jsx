"use client";
import { GoogleMap } from "../Components/GoogleMap";
import { Linkedin, Instagram, Mail, Phone, Link, Facebook, MessageCircle } from 'lucide-react';
import { TypingText } from "../Components/TypingText";

const socials = [
    {
        social: 'Mail',
        link: 'mailto:astroclubau@gmail.com',
        icon: <Mail />,
    },
    {
        social: 'Insta',
        link: 'https://www.instagram.com/astroclub_au?igsh=MXgycG92d2Jva253dQ==',
        icon: <Instagram />,
    },
    {
        social: 'Linkedin',
        link: 'https://www.linkedin.com/in/astro-club-au-31aa2834a/',
        icon: <Linkedin />,
    },
    {
        social: 'Linktree',
        link: 'https://linktr.ee/astroclubofau',
        icon: <Link />
    },
    {
        social: 'Facebook',
        link: 'https://www.facebook.com/astroclubofau',
        icon: <Facebook />
    },
    {
        social: 'WhatsApp',
        link: 'https://whatsapp.com/channel/0029Vb7iaHP5Ui2f10mudW3Y',
        icon: <MessageCircle />   // WhatsApp-like icon
    }
];

function Contacts() {
    return (
        <div className="relative min-h-screen bg-gray-900 min-w-full text-white p-4 md:p-8 overflow-hidden">
            
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <img
                    src='/images/iss.jpg'
                    alt='aurora'
                    className="w-full h-full object-cover opacity-80 bg-no-repeat"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Main Content */}
            <div className="relative w-full h-screen grid items-center">
                <div className="p-4 w-full rounded-3xl border-2 border-transparent lg:border-white justify-center">

                    <h1 className="oswald text-5xl text-center font-bold text-lime-400 my-2 p-2">
                        CONTACTS
                    </h1>

                    <GoogleMap />

                    {/* Social Icons */}
                    <div className="my-6 lg:my-12 px-4 flex justify-around lg:justify-center gap-5 items-center">
                        {socials.map((social) => (
                            <span
                                key={social.social}
                                className="scale-150 backdrop-blur-sm border-2 bg-slate-800 p-1 border-lime-400 rounded-xl transition-all duration-300 ease-in-out hover:text-lime-400 hover:scale-110"
                            >
                                <a href={social.link} target="_blank" rel="noopener noreferrer">
                                    {social.icon}
                                </a>
                            </span>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 px-8 flex flex-col items-center">
                        <Phone className="scale-150 border-2 h-8 w-8 bg-slate-800 px-1 border-lime-400 rounded-lg transition-all duration-300 ease-in-out hover:text-lime-400 hover:scale-110" />
                        
                        <h2 className="mt-4">
                            <TypingText text='+918637451579' speed={0.1} />
                        </h2>
                        
                        <h2>
                            <TypingText text='astroclubau@gmail.com' speed={0.1} />
                        </h2>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contacts;
