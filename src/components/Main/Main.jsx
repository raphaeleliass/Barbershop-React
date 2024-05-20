import About from "./About";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import Team from "./Team";
import Gallery from "./Gallery";

function Main() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".main-about", {
      opacity: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".main-about",
      },
    });
    gsap.to(".main-about-title", {
      y: 0,
      opacity: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".main-about",
      },
    });
  }, []);

  return (
    <main
      id="main"
      className="mx-auto mt-12 flex max-w-xs flex-col  justify-center md:mt-32 md:max-w-3xl  lg:max-w-5xl"
    >
      <section className="main-about mt-32 flex flex-col gap-6 md:gap-10">
        <h2 className="main-about-title text-center text-2xl font-black uppercase md:text-4xl">
          About us
        </h2>
        <About
          divClass=""
          text="We are more than just a barbershop; we are a destination for modern men seeking excellence in personal grooming. We combine traditional techniques with a contemporary touch, creating a relaxed environment for our clients. Step in, relax, and let our team of experts take care of your look. Here, every cut is a masterpiece, every client is valued, and every visit is a unique experience. Feel at home!"
          img="bg-barbershop"
        />
      </section>
      <section className="main-team mt-32">
        <h2 className="main-about-title md:mb-10 mb-6 text-center text-2xl  font-black uppercase md:text-4xl">
          Our Team
        </h2>
        <Team />
      </section>
      <section className="mt-32">
        <Gallery/>
      </section>
    </main>
  );
}

export default Main;
