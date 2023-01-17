import React from "react";

const Knowledge = () => {
  return (
    <div
      id="knowledge"
      className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4"
    >
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="object-cover w-full h-full p-2 rounded-3xl hover:scale-105 ease-in-out duration-300 row-span-3"
          src="https://source.unsplash.com/random/?1"
          alt="glang pic"
        />
        <img
          className="object-cover w-full h-full p-2 rounded-3xl hover:scale-105 ease-in-out duration-300 row-span-2"
          src="https://source.unsplash.com/random/?2"
          alt="glang pic"
        />
        <img
          className="object-cover w-full h-full p-2 rounded-3xl hover:scale-105 ease-in-out duration-300 row-span-2"
          src="https://source.unsplash.com/random/?3"
          alt="glang pic"
        />
        <img
          className="object-cover w-full h-full p-2 rounded-3xl hover:scale-105 ease-in-out duration-300 row-span-3"
          src="https://source.unsplash.com/random/?4"
          alt="glang pic"
        />
        <img
          className="object-cover w-full h-full p-2 rounded-3xl hover:scale-105 ease-in-out duration-300 row-span-2"
          src="https://source.unsplash.com/random/?5"
          alt="glang pic"
        />
      </div>
      {/* Right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold hover:shadow-lg hover:shadow-black/70 hover:p-1 rounded-lg hover:bg-blue-100 ease-in duration-300">
          What&apos;s it all about&nbsp;.
        </h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
          neque?
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam dicta,
          corrupti eveniet, repellat eligendi aspernatur natus exercitationem
          cumque hic ipsa facere doloremque! Minima earum voluptas ducimus quasi
          dolorem, et dolores.
        </p>
        <div className="space-y-2 sm:space-y-0">
          <button className="border-black hover:scale-105 ease-in duration-300 transition-transform mr-4 hover:shadow-xl">
            <a href="/" title="more">
              Curious,&nbsp;eh?&nbsp;Learn more&nbsp;...
            </a>
          </button>
          <button className="bg-black text-white hover:scale-105 ease-in duration-300 transition-transform border-black hover:shadow-xl">
            <a href="/" title="meet">
              Meet&nbsp;up!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
