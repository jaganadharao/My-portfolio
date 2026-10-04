import React from 'react';
import stackImage from '../assets/about/yusuf-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const JavaIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#EA2D2E" d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.391-6.874-3.391-10.897 5.163-31.934 2.759-25.932-2.097 4.501-3.631 0 0-3.309-.481zM65.856 86.36c-11.756 6.392-26.996 7.086-18.907 1.186 0 0-7.915 5.163-16.747 9.202 0 0-2.31 2.259 8.003 2.981 17.168 1.199 43.879-.749 45.026-8.065 0 0 1.243-3.178-17.375-5.304z"/>
      <path fill="#EA2D2E" d="M83.528 71.122s5.58 5.784-6.154 10.372c-22.342 8.725-46.496.666-29.911-6.023 6.238-2.515 9.738-2.728 9.738-2.728s-3.397-2.4-11.715 2.103c-24.692 13.36 11.12 19.441 39.654 8.366 5.363-2.077 8.162-5.965 8.162-5.965-.001.001-9.774-6.125-9.774-6.125zM91.625 96.106c-.198.395-.461.781-.791 1.159 0 0 13.189-3.404 8.545-11.964-4.591-8.454-8.145-12.625 10.927-27.179 0 0-29.855 7.447-18.681 37.984z"/>
      <path fill="#EA2D2E" d="M76.203 0s11.752 11.752-11.146 29.835c-18.359 14.499-4.187 22.754-.005 32.198-10.7-9.662-18.555-18.159-13.29-26.074C59.003 24.494 80.823 18.793 76.203 0zM66.414 113.085c21.023 1.345 53.358-.745 54.156-10.672 0 0-1.473 3.777-17.441 6.776-18.02 3.384-40.215 2.988-53.367.819 0 .001 2.695 2.228 16.652 3.077z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Java</span>
  </div>
);

const SpringBootIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path
        fill="#3776AB"
        d="M63.6 0C31.8 0 33.8 13.8 33.8 13.8l.1 14.3h30.2v4.3H21.8S0 29.9 0 62.1s19 31 19 31h11.4V78.8s-.6-19 18.7-19h30.2s17 0 17-16.4V14.6S99.9 0 63.6 0zm-16.7 9.5c3.2 0 5.8 2.6 5.8 5.8s-2.6 5.8-5.8 5.8-5.8-2.6-5.8-5.8 2.6-5.8 5.8-5.8z"
      />
      <path
        fill="#FFD43B"
        d="M64.4 128c31.8 0 29.8-13.8 29.8-13.8l-.1-14.3H63.9v-4.3h42.3S128 98.1 128 65.9s-19-31-19-31H97.6v14.3s.6 19-18.7 19H48.7s-17 0-17 16.4v28.8S28.1 128 64.4 128zm16.7-9.5c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8 5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8z"
      />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);



const MernIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path
        fill="#E44D26"
        d="M19.5 2h89l-8 90-36.5 10-36.5-10-8-90z"
      />
      <path
        fill="#F16529"
        d="M64 10v84l29.5-8 6.5-76H64z"
      />
      <path
        fill="#EBEBEB"
        d="M64 30H38l1.5 17H64V30zm0 34H41l1.5 16L64 86V64z"
      />
      <path
        fill="#FFF"
        d="M64 47H94l-1.5 17H64V47zm0 37l21-6 1.5-17H64v23z"
      />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">HTML </span>
  </div>
);



const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Md Yusuf — Full Stack & Java Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JavaIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <SpringBootIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MernIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
