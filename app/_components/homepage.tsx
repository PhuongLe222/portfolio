import { About } from "./about";
import Work from "./work";
import Hero from "./hero";
import { Contact } from "./contact";

export const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Contact />
      <footer className="w-screen relative left-1/2 transform -translate-x-1/2 text-sm py-4 text-center text-sub-text/60 border-t bg-background">
        © {new Date().getFullYear()} PHUONGLE™. All Rights Reserved.
      </footer>
    </>
  );
};
