import { useLayoutEffect } from "react";
import HeroSections from "./HeroSections";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hero-logo", {
      y: 0,
      delay: 1.2,
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
    return () => {
      gsap.killTweensOf(null, { all: true });
    };
  }, []);

  return (
    <div className="z-30 flex flex-col items-center justify-center md:mt-12">
      <section className="z-30 gap-4 flex w-full max-w-xs flex-col md:max-w-3xl md:flex-row lg:max-w-5xl">
        <div className="z-30 flex flex-col items-center rounded-xl lg:w-1/2">
          <a href="#" className="hero-logo">
            <h1 className="py-12 text-center text-5xl font-black uppercase md:text-6xl">
              barbershop
            </h1>
          </a>
          <section className="hero-section-1">
            <HeroSections
              divClassName=""
              text="Improve your appearance"
              imgClass="bg-hero_pic_2 shadow-xl"
            />
          </section>
          <section className="hero-section-2">
            <HeroSections
              divClassName="flex-row-reverse"
              text="Improve your style"
              imgClass="bg-hero_pic_1 shadow-xl"
            />
          </section>
        </div>
        <aside className="hero-aside h-32 rounded-xl bg-hero_pic_4  bg-cover bg-center shadow-xl md:static md:h-auto md:w-1/2 md:bg-cover md:bg-center"></aside>
      </section>
      <div className="hero-punch flex flex-col text-center md:flex-row md:gap-4 md:mt-32 mt-12">
        <h2 className="text-5xl font-black uppercase md:text-6xl lg:text-7xl">
          improve
        </h2>
        <h2 className="border-b-4 border-b-green-500 text-5xl font-black uppercase md:text-6xl lg:text-7xl">
          yourself
        </h2>
      </div>
    </div>
  );
}

export default Hero;
