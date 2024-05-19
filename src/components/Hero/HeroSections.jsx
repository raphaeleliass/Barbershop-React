import PropTypes from "prop-types";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function HeroSections({ text, divClassName, imgClass }) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hero-section-text", {
      delay: 1,
      opacity: 1,
      duration: 0.6,
    });
    gsap.killTweensOf("hero.section-text");
  });

  return (
    <div
      className={`flex items-center justify-center gap-4 flex-row ${divClassName}`}
    >
      <div
        className={`md:size-56 size-32 rounded-xl bg-cover bg-center ${imgClass}`}
      ></div>
      <h2 className="hero-section-text p-2 text-center text-xl md:text-4xl font-black uppercase w-1/2">
        {text}
      </h2>
    </div>
  );
}
HeroSections.propTypes = {
  text: PropTypes.string.isRequired,
  divClassName: PropTypes.string.defaultProps,
  imgClass: PropTypes.string.defaultProps,
};

export default HeroSections;
