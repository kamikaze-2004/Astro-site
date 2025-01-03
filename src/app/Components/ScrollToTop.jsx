import { useState, useEffect } from "react";

export const ScrollToTopButton = () =>
{
    const [isVisible,setIsVisible] = useState(false);

    useEffect(()=>
    {   
        const handleScroll = () =>
        {setIsVisible(window.scrollY > 200);}
        window.addEventListener('scroll',handleScroll);
        return ()=>(window.removeEventListener('scroll',handleScroll));
    }
    ,[])

    const scrollToTop = () =>
    {
        window.scrollTo({
                top:0,
                behavior:'smooth',
        })
    }

    return(
            <button className={`fixed bottom-10 right-5 px-1  rounded-xl bg-white text-white opacity-70 z-[5001] ${isVisible? 'block lg:hover:bg-lime-600 transition-all duration-300 ease-in-out lg:hover:scale-150 focus:bg-lime-600 focus:scale-150' : 'hidden' }`} onClick={scrollToTop}>    
    <div className={'planet1'}></div>
    </button>
        
    );
}