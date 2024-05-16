import { useRef } from "react";
import "./slider.css";

const Slider = () => {
  const cardsRef = useRef(null);
  function prevHandler() {
    if (cardsRef.current) {
      const { clientWidth, scrollLeft } = cardsRef.current;
      cardsRef.current.scrollTo({
        left: clientWidth - scrollLeft,
        behavior: "smooth",
      });
    }
  }

  function nextHandler() {
    if (cardsRef.current) {
      const { clientWidth, scrollLeft } = cardsRef.current;
      cardsRef.current.scrollTo({
        left: scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  }
  return (
    <div className="slider">
      <header>
        <p>Trending Posts</p>
        <controls className="controls">
          <button onClick={prevHandler}>Prev</button>
          <button onClick={nextHandler}>Next</button>
        </controls>
      </header>
      <div className="cards" ref={cardsRef}>
        {Array(50)
          .fill(1)
          .map((_, index) => {
            return <Card key={index} />;
          })}
      </div>
    </div>
  );
};

const Card = () => {
  return <div className="card" />;
};

export default Slider;
