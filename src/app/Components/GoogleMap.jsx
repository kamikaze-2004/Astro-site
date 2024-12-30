import React from "react";

export const GoogleMap = () => {
  return (
    <div className="mapouter w-full rounded-3xl border-2 border-lime-400 ">
      <div className="gmap_canvas w-full rounded-3xl border-2 border-lime-400 ">
        <iframe
          className="gmap_iframe"
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=12, Sardar Patel Rd, Anna University, Guindy, Chennai, Tamil Nadu 600025&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        ></iframe>
        <a href="https://sprunkin.com/">Sprunki</a>
      </div>
      <style jsx>{`
        .mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          height: 400px;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          width: 100%;
          height: 400px;
        }
        .gmap_iframe {
          height: 400px !important;
        }
      `}</style>
    </div>
  );
};


