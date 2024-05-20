import React, { useState, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Team() {
  const [activeCard, setActiveCard] = useState("card-1");

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".main-team-card-1", {
      opacity: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".main-team",
      },
    });
    gsap.to(".main-team-card-2", {
      
      opacity: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: ".main-team-card-1",
      },
    });
    gsap.to(".main-team-card-3", {
      
      opacity: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".main-team-card-2",
      },
    });

    return () => {
      gsap.killTweensOf(".main-team-card-1");
      gsap.killTweensOf(".main-team-card-2");
      gsap.killTweensOf(".main-team-card-3");
    };
  }, []);

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  return (
    <div className="main-team mx-auto flex max-w-xs flex-col items-center justify-center gap-2 md:max-w-3xl md:flex-row lg:max-w-5xl">
      <div
        id="card-1"
        className={`team-card main-team-card-1 flex w-full cursor-pointer flex-col justify-end rounded-xl bg-barber1 bg-cover bg-center pb-6 pl-4 md:h-[500px] ${
          activeCard === "card-1" ? "active" : ""
        }`}
        onClick={() => handleCardClick("card-1")}
      >
        <h3 className="">John B.</h3>
        <p className="text-base font-light">barber</p>
      </div>
      <div
        id="card-2"
        className={`team-card main-team-card-2 flex h-14 w-full cursor-pointer flex-col justify-end rounded-xl bg-barber2 bg-cover bg-center pb-6 pl-4 md:h-[500px] md:w-1/4 ${
          activeCard === "card-2" ? "active" : ""
        }`}
        onClick={() => handleCardClick("card-2")}
      >
        <h3 className="">John B.</h3>
        <p className="text-base font-light">barber</p>
      </div>
      <div
        id="card-3"
        className={`team-card main-team-card-3 flex h-14 w-full cursor-pointer flex-col justify-end rounded-xl bg-barber3 bg-cover bg-center pb-6 pl-4 md:h-[500px] md:w-1/4 ${
          activeCard === "card-3" ? "active" : ""
        }`}
        onClick={() => handleCardClick("card-3")}
      >
        <h3 className="">John B.</h3>
        <p id="paragraph3" className="text-base font-light md:text-xl">
          barber
        </p>
      </div>
    </div>
  );
}

export default Team;
