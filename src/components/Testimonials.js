const Testiomonials = () => {
  const testimonials = [
    {
      id: 1,
      text: `Acme has always been there for me. Their Explorer rocket arrived in
      a wooden crate as expected. Life-long customer! A++ shopping experience`,
      name: `Wile E. Coyote, Genius`,
    },
    {
      id: 2,
      text: `The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space 
      Modulator on several occassions. This makes me very, very angry! Nevertheless, 
      K-9 and I have awarded Acme the Martian contract for space exploration rockets 
      based on Acme's quality and sturdy designs.`,
      name: `Marvin The Martian`,
    },
    {
      id: 3,
      text: `I knew I not only wanted — I needed — Acme's Infinity Rocket for my mission in space. 
      Acme delivered in one day! Nothing says Take meto your leader like Acme's Infinity Rocket! 💯`,
      name: `Buzz Lightyear`,
    },
  ];
  return (
    <section id="testimonials" className="p-6 my-12 scroll-mt-20">
      <h2 className="text-4xl mx-auto text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Testimonials
      </h2>
      {testimonials.map((testimonial) => {
        return (
          <figure key={testimonial.id} className="my-12">
            <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative ">
              <p
                className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 
          before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 
          before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2
          after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 
          after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 
          after:-translate-y-2 "
              >
                {testimonial.text}
              </p>
            </blockquote>
            <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
              &#8212;{testimonial.name}
            </figcaption>
          </figure>
        );
      })}
    </section>
  );
};
export default Testiomonials;
