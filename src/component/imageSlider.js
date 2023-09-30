import React, { useState } from "react";
import img1 from "C:/Users/91875/Desktop/react js movies app/movie App/src/images/movie.jpg";
import img2 from "C:/Users/91875/Desktop/react js movies app/movie App/src/images/pxfuel (1).jpg";
import img3 from "C:/Users/91875/Desktop/react js movies app/movie App/src/images/pxfuel (2).jpg";
import img4 from "C:/Users/91875/Desktop/react js movies app/movie App/src/images/pxfuel.jpg";

function ImageSlider() {
  const [allImages, setAllImages] = useState(0);
  const images = [img4, img2, img3, img1];

  const next = () => {
    setAllImages(allImages + 1);
    if (allImages === images.length - 1) {
      setAllImages(0);
    }
  };
  const preview = () => {
    setAllImages(allImages - 1);
    if (allImages <= 0) {
      setAllImages(images.length - 1);
    }
  };
  return (
    <>
      <div className="image-Slider">
        <img
          className="image_slider-images"
          src={images[allImages]}
          alt="movies.jpg"
        />
      </div>
      <div className="next_pre_btn">
        <div className="n-p-btn">
          <button className="pre_btn" onClick={preview}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next-btn" onClick={next}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
