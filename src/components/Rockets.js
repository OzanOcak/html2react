const Rockets = () => {
  const rockets = [
    {
      index: 1,
      imgName: "rocketman",
      name: "Explorer",
      priceLevel: "$",
      defination: "Affordable Exploration",
    },
    {
      index: 2,
      imgName: "rocketride",
      name: "Adventurer",
      priceLevel: "$$",
      defination: "Best Selling Rocket!",
    },
    {
      index: 3,
      imgName: "rocketlaunch",
      name: "Infinity",
      priceLevel: "$$$",
      defination: "Luxury Starship",
    },
  ];
  return (
    <section
      id="rockets"
      className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 taxt-slate-900 dark:text-white">
        Our Rockets
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
        {rockets.map((rocket) => {
          return (
            <li
              key={rocket.index}
              className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl"
            >
              <img
                src={`./${rocket.imgName}.png`}
                alt="Explorer"
                className="w-1/2 mb-6"
              />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">
                {rocket.name}
              </h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
                {rocket.priceLevel}
              </p>
              <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
                {rocket.defination}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Rockets;
