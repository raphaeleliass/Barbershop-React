import { PropTypes } from "prop-types";
import { ImQuotesLeft } from "react-icons/im";

function About({ divClass, img, text }) {
  return (
    <div className={`flex flex-col gap-4 ${divClass}`}>
      <div
        className={`flex h-full w-full items-center justify-center rounded-xl  bg-cover bg-center shadow-xl md:h-96 ${img}`}
      >
        <div className="flex h-full items-center justify-center rounded-xl bg-white bg-opacity-60">
          <div className="mx-2 my-2 flex flex-col items-center justify-center gap-y-12 rounded-xl bg-gray-100 p-6 md:mx-8 md:my-0 md:flex-row md:p-12">
            <div className="flex flex-col items-center justify-center gap-4 text-center md:mr-14 lg:mr-32">
              <img
                className="size-28 rounded-full shadow-xl md:size-32"
                src="https://images.pexels.com/photos/2341350/pexels-photo-2341350.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="owner picture"
              />
              <div className="">
                <h2 className="font-Inter font-semibold md:text-sm lg:text-xl">
                  Andrew E.
                </h2>
                <p className="text-center text-sm font-light text-neutral-900">
                  Owner
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="absolute">
                <ImQuotesLeft className="-ml-4 -mt-2 size-4 md:-ml-6 md:-mt-2 md:size-6 lg:-ml-10 lg:-mt-4 lg:size-8" />
              </div>
              <p className="text-sm font-semibold text-neutral-400">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  divClass: PropTypes.string.defaultProps,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default About;
