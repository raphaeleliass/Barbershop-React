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
  });

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 md:flex-row ${divClassName}`}
    >
      <div
        className={`size-56 rounded-xl bg-cover bg-center ${imgClass}`}
      ></div>
      <h2 className="hero-section-text p-2 text-center text-4xl font-black uppercase md:w-1/2">
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
