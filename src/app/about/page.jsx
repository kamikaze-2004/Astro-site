"use client";
import { FadeInWhenVisible } from "../Components/FadeInVisible";
import { TypingText } from "../Components/TypingText";

function About() {
  return (
    <div className="relative min-h-screen min-w-full text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <img 
          src='/images/aurora.jpg'
          alt='aurora'
          className="w-full h-full object-cover opacity-80 bg-no-repeat"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 pb-10">
        <div className="px-6 py-10">
                <div className="flex flex-col  justify-center items-center gap-8 ">
              
              <FadeInWhenVisible className="flex justify-center items-center">
                <img 
                  src='/images/ceg_front_view.jpg'
                  alt='campus'
                  className='h-full w-4/5 rounded-lg ml-8 mt-20 scale-125 md:scale-100 lg:scale-100 md:ml-40 lg:ml-40 '
                />
              </FadeInWhenVisible>
            
            <div className="flex flex-col justify-start items-center md:items-center lg:items-center">
              <TypingText classN={'oswald text-5xl lg:md:text-6xl mb-2 font-bold mb-4 '} text={'Anna University'} speed={0.01}/>
              <TypingText
                text={
                  `Established in 1794, Anna University is Asia's oldest technical institution, formed through the merger of four esteemed institutions in Chennai. Offering diverse programs in engineering, technology, architecture, and management, it serves over 12,000 students with nearly 1,000 faculty members. Ranked 10th in India and 427th globally by QS, the university excels in sustainability, securing 9th place in India for sustainability in 2024. It holds an "A++" NAAC accreditation and ranks highly in research and engineering. Anna University is also recognized for its excellence in SDG 7 (Affordable and Clean Energy) and its academic achievements across multiple national rankings.`
                }
                speed={0.009} 
              />
            </div>
            </div>

                  <div className=" mt-20 lg:mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center mb-8">

            <div className="flex flex-col justify-start items-center md:items-start lg:items-start">
              <TypingText classN={'oswald text-6xl mb-2 font-bold'} text={'AstroClub'} speed={0.01}/>
              <TypingText classN={'text-xl font-semibold mt-2 mb-4'} text={'Introduction'} speed={0.02}/>
              <TypingText
                text={
                  "We are an active group of space enthusiasts from Anna University, Chennai. Since the club's inception in 2018, we have actively conducted several events and discussions on topics related to astronomy. We motivate our students to aspire for space-based careers by providing them appropriate guidance through our experienced group of alumni."
                }
                speed={0.009} 
              />
            </div>
            <div className="flex justify-center items-center">
              <FadeInWhenVisible>
                <img 
                  src='/images/club_open_call.jpg'
                  alt='about'
                  className='h-auto w-auto rounded-lg'
                />
              </FadeInWhenVisible>
            </div>
          </div>

          
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <FadeInWhenVisible dir="x" val={[0,-50]}>
                <img 
                  src='/images/juniors meet-2.jpg'
                  alt='about'
                  className='h-auto w-auto rounded-lg'
                />
              </FadeInWhenVisible>
            </div>
            <div className="flex flex-col justify-start items-center md:items-start lg:items-start">
              <TypingText classN={'oswald text-5xl  mb-2 font-bold'} text={'Our Vision'} speed={0.01}/>
              <p className={'text-xl font-semibold mt-2 mb-1'} >To inspire humanity – in Science and Astronomy.</p>
              <TypingText
                text={
                    "We as a club strive to make astronomy accessible to the public. We educate our students about the need for research in astronomy and space sciences. We aim to promote Dark-Sky Friendly Lighting practices to ensure that our night sky is preserved for the current and future generations to come."
                }
                speed={0.009} 
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;