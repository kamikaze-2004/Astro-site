"use client";
import { GoogleMap } from "../Components/GoogleMap";
import { Linkedin,Instagram,Mail,Phone,Link, Facebook } from 'lucide-react';
import { TypingText } from "../Components/TypingText";

const socials = [
    {
        social:'Mail',
        link:'mailto:astroclubau@gmail.com',
        icon:<Mail/>,
    },
    {
        social:'Insta',
        link:'https://www.instagram.com/astroclub_au?igsh=MXgycG92d2Jva253dQ==',
        icon:<Instagram/>,
    },
    {
        social:'Linkedin',
        link:'https://www.linkedin.com/company/the-astro-club-of-au/',
        icon:<Linkedin/>,
    },
    {
        social:'Linktree',
        link:'https://linktr.ee/astroclubofau',
        icon:<Link/>
    }
    ,{
        social:'Facebook',
        link:'https://www.facebook.com/astroclubofau',
        icon:<Facebook/>
    }
]

function Contacts()
{
    return(
         <div className="relative min-h-screen bg-gray-900 text-white p-4 md:p-8 overflow-hidden ">
        <div className="fixed inset-0 z-0">
        <img 
          src='/images/iss.jpg'
          alt='aurora'
          className="w-full h-full object-cover opacity-80 bg-no-repeat z-0"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative w-full h-screen grid grid-cols  items-center">
        <div className="p-4 w-full rounded-3xl border-2 border-transparent lg:border-white justify-center">
        <h1 className="oswald text-5xl text-center font-bold text-lime-400 my-2 p-2 space-y-4">CONTACTS</h1>
        <GoogleMap />
        <div className="my-6 lg:my-12 px-8  flex  justify-around lg:justify-center gap-5 lg:gap-0 items-center">
            {socials.map((social)=>(
                <span key={social.social} className="scale-150 backdrop-blur-sm border-2 bg-slate-800 p-1  border-lime-400 rounded-xl transistion-colors duration-300 ease-in-out hover:text-lime-400 hover:scale-110">
                <a href={social.link}>{social.icon}</a>
                </span>
            ))}
        </div>
        <div className="mt-4 px-8 flex flex-col  items-center">
            <Phone className="scale-150 border-2 h-8 w-8 bg-slate-800 px-1  border-lime-400 rounded-lg transistion-colors duration-300 ease-in-out hover:text-lime-400 hover:scale-110"/>
            <h2 className="text-bold mt-4  "><TypingText text='+917418224810' speed={0.1}/></h2>
            <h2 className="text-bold mt-0 "><TypingText text='astroculbau@gmail.com' speed={0.1}/></h2>
            
        </div>
        </div>
      </div>
        </div>
        
    );
}

export default Contacts;