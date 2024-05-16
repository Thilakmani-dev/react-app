import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const ImageCarousel = (props) => {
  const { data } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFile, setCurrentFile] = useState(null);

  useEffect(
    function updateCurrentFile() {
      data && setCurrentFile(data[currentIndex]);
    },
    [currentIndex, data]
  );

  function goToBack() {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  }

  function goToNext() {
    setCurrentIndex((prev) => (prev === data?.length ? prev : prev + 1));
  }

  if (!currentFile) return;
  return (
    <div className="imageCarousel">
      <div onClick={goToBack}>Previous</div>
      <img
        src={currentFile.src}
        key={currentFile.name}
        alt={currentFile.name}
      />
      <div onClick={goToNext}>Next</div>
    </div>
  );
};

export default ImageCarousel;
