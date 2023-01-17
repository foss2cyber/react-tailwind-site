import React from "react";

const Comrades = () => {
  return (
    <div
      id="comrades"
      className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4"
    >
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">
          The&nbsp;Working&nbsp;Class&nbsp;.
        </h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae
          quia facilis repellendus atque aperiam.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="https://source.unsplash.com/random/?6"
          alt="comrade pic"
        />
        <img
          className="row-span-2 object-cover w-full h-full rounded-2xl"
          src="https://source.unsplash.com/random/?7"
          alt="comrade pic"
        />
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="https://source.unsplash.com/random/?8"
          alt="comrade pic"
        />
      </div>
    </div>
  );
};

export default Comrades;
