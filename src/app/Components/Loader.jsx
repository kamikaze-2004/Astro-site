import { RingLoader } from "react-spinners"; 

const Loader = ({ text = "ASTROCLUB AU" }) => {
  return (
    <div className="relative flex justify-center items-center h-screen">
     
      <RingLoader
        color="#36d7b7" 
        size={200} 
        cssOverride={{ position: 'absolute' }} 
      />
      <div className="flex space-x-2 relative">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={`inline-block gradient-text`} 
            style={{
              animation: `spin-char 1s linear forwards`, 
              animationDelay: `${index * 1}s`, 
              display: "inline-block", 
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
