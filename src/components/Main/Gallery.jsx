import GalleryImages from "./GalleryImages";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

function Gallery() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".gallery-div-1", {
      opacity: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".gallery",
      },
    });
    gsap.to(".gallery-div-2", {
      opacity: 1,
      delay: 0.4,
      scrollTrigger: {
        trigger: ".gallery",
      },
    });
    gsap.to(".gallery-div-3", {
      opacity: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".gallery",
      },
    });

    return () => {
      gsap.killTweensOf(null, { all: true });
    };
  }, []);
  return (
    <div className="gallery flex h-[900px] w-full flex-col gap-2 rounded-xl bg-gray-100 p-2 shadow-xl md:h-[500px] md:flex-row">
      <div className="gallery-div-1 flex h-full w-full flex-row gap-2 md:flex-col">
        <GalleryImages divClass="bg-haircut_1 w-1/2 h-full  md:h-full md:w-full" />
        <GalleryImages divClass="bg-haircut_2 w-1/2 h-full md:h-full  md:w-full" />
      </div>
      <div className="gallery-div-2 flex h-full w-full flex-col gap-2">
        <div className="flex h-full w-full flex-row gap-2">
          <GalleryImages divClass="bg-haircut_6 w-1/2 h-full md:h-full md:w-full" />
          <GalleryImages divClass="bg-haircut_7 w-1/2 h-full md:h-full md:w-full" />
        </div>
        <GalleryImages divClass="bg-haircut_8 w-full h-full md:h-full md:w-full" />
      </div>
      <div className="gallery-div-3 flex h-full w-full flex-row gap-2 md:flex-col">
        <GalleryImages divClass="bg-haircut_4 w-1/2 h-full md:h-full md:w-full" />
        <GalleryImages divClass="bg-haircut_5 w-1/2 h-full md:h-full md:w-full" />
      </div>
    </div>
  );
}

export default Gallery;
