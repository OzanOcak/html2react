import HamburgerButton from "./HamburgerButton";

const Header = () => {
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex flex-row justify-between items-center ">
        <h1 className="text-3xl font-medium">
          <a href="#hero" className="hover:opacity-80">
            🚀 Acme Rocket {/** 🚀 emojipedia */}
          </a>
        </h1>
        <div>
          <HamburgerButton />
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <a href="#rockets" className="hover:opacity-80">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-80">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-80">
              Contact Us
            </a>
          </nav>
        </div>
      </section>

      {/*mobile nav*/}
      <section
        id="mobile-menu"
        class="top-68 justify-content-center absolute hidden w-full origin-top animate-open-menu flex-col bg-black text-5xl"
      >
        {/* <button class="text-8xl self-end px-6"> &times;</button> */}
        <nav
          class="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <a href="#hero" class="w-full py-6 text-center hover:opacity-90">
            Home
          </a>
          <a href="#rockets" class="w-full py-6 text-center hover:opacity-90">
            Our Rockets
          </a>
          <a
            href="#testimonials"
            class="w-full py-6 text-center hover:opacity-90"
          >
            Testimonials
          </a>
          <a href="#contact" class="w-full py-6 text-center hover:opacity-90">
            Contact Us
          </a>
          <a href="#footer" class="w-full py-6 text-center hover:opacity-90">
            Legal
          </a>
        </nav>
      </section>
      {/*end of mobile nav*/}
    </header>
  );
};
export default Header;
