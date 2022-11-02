const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 
      mb-12 dark:text:white scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
          We Boldy Go
          <span className="text-indigo-700 dark:text-indigo-300">
            Where No Rocket
          </span>
          Has Gone Before...
        </h2>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          We're building rockets for the next century today. From the moon to
          Mars, Jupiter and beyond...
        </p>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          Think Acme Rockets.
        </p>
      </article>
      <img src="./rocketman.png" alt="hero_image"></img>
    </section>
  );
};
export default Hero;
