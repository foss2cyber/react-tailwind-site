import React from "react";

const Hero = () => {
  return (
    <div id="#" className="w-full h-screen">
      <img
        className="w-full h-screen top-0 left-0 bottom-0 right-0 object-cover"
        src="https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&avif=format&fit=crop&w=1117&q=80"
        alt="hero pic"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
      <div
        className="absolute top-0 w-full
       h-full flex flex-col justify-center text-white"
      >
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className="text-lg text-slate-200">Relax&nbsp;.</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl hover:text-slate-400 ease-in duration-200">
            You&apos;re with comrades&nbsp;.
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl font-inter">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            alias quam molestias modi! Sunt harum sequi excepturi eos laudantium
            exercitationem voluptatum beatae natus nisi ducimus?
          </p>
          <button className="bg-white text-black hover:bg-transparent hover:text-white hover:scale-105 ease-in duration-300">
            Join the convo&nbsp;.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
