import React, {useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    "/img/pager1.png",
    "/img/pager2.png",
    "/img/pager3.png",
    "/img/pager4.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pager-slider">
      <img
        src={images[index]}
        alt="pager-img"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      <div className="pager-area">
        {images.map((_, i) => (
          <div
            key={i}
            className="pager-click"
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>

      <div
        className="pager-indicator"
        style={{ transform: `translateX(${index * 20}px)` }}
      ></div>
    </div>
  );
};

export default ImageSlider;
