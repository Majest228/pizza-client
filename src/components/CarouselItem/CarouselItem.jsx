import React from "react";
import "./CarouselItem.scss";

const CarouselItem = ({ id, title, imgLink, color }) => {
  return (
    <div className={`carousel-item ${color}`}>
      <img className="carousel-item__img" src={imgLink} alt="" />
      <p className="carousel-item__title">{title}</p>
    </div>
  );
};

export default CarouselItem;
