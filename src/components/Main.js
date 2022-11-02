import Contact from "./Contact";
import Hero from "./Hero";
import HR from "./HR";
import Rockets from "./Rockets";
import Testiomonials from "./Testimonials";

const Main = () => {
  return (
    <main className="max-w-4xl mx-auto">
      <Hero />
      <HR />
      <Rockets />
      <HR />
      <Testiomonials />
      <HR />
      <Contact />
    </main>
  );
};
export default Main;
