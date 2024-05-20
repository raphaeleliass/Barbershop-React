import PropTypes from "prop-types";

function GalleryImages({ divClass }) {
  return (
    <div
      className={`rounded-xl bg-cover bg-center ${divClass}`}
    ></div>
  );
}

GalleryImages.propTypes = {
  divClass: PropTypes.string.isRequired,
};

export default GalleryImages;
