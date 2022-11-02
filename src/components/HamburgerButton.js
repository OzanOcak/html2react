const HamburgerButton = () => {
  return (
    <button
      id="hamburger-button"
      className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
    >
      <div
        className="absolute top-4 mt-0.5 h-1 w-8 rounded bg-white before:absolute
      before:h-1 before:w-8 before:rounded before:bg-white before:-translate-x-4
      before:-translate-y-3 after:absolute after:h-1 after:w-8 after:rounded after:bg-white
      after:-translate-x-4 after:translate-y-3"
      ></div>
    </button>
  );
};
export default HamburgerButton;
