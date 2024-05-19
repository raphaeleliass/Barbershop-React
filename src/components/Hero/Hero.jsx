import { useLayoutEffect } from "react";
import HeroSections from "./HeroSections";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hero-logo", {
      y: 0,
      delay: 0.1,
      opacity: 1,
    });
    gsap.to(".hero-aside", {
      y: 0,
      delay: 0.4,
      opacity: 1,
    });
    gsap.to(".hero-section-1", {
      x: 0,
      delay: 0.6,
      opacity: 1,
    });
    gsap.to(".hero-section-2", {
      x: 0,
      delay: 0.8,
      opacity: 1,
    });
    gsap.to(".hero-punch", {
      y: 0,
      delay: 0.3,
      opacity: 1,
      scrollTrigger: {
        trigger: ".hero-punch",
      },
    });
  });

  return (
    <div className="my-12 flex flex-col items-center justify-center gap-12 md:gap-32">
      <section className="flex w-full max-w-xs gap-4 md:max-w-3xl md:flex-row lg:max-w-5xl">
        <div className="flex flex-col items-center rounded-xl lg:w-1/2">
          <a href="#" className="hero-logo">
            <h1 className="py-12 text-center text-4xl font-black uppercase md:text-6xl">
              barbershop
            </h1>
          </a>
          <section className="hero-section-1">
            <HeroSections
              text="Improve your appearance"
              imgClass="bg-hero_pic_2 shadow-xl"
            />
          </section>
          <section className="hero-section-2">
            <HeroSections
              divClassName="md:flex-row-reverse"
              text="Improve your style"
              imgClass="bg-hero_pic_1 shadow-xl"
            />
          </section>
        </div>
        <aside className="hero-aside bg-hero_pic_4 rounded-xl bg-green-300 bg-cover bg-center shadow-xl md:w-1/2"></aside>
      </section>
      <div className="hero-punch flex flex-col gap-4 text-center md:flex-row">
        <h2 className="text-5xl font-black uppercase">improve</h2>
        <h2 className="border-b-4 border-b-green-500 text-5xl font-black uppercase">
          yourself
        </h2>
      </div>
    </div>
  );
}

export default Hero;
