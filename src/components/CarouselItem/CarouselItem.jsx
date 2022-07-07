import React from "react";
import "./CarouselItem.scss";

const CarouselItem = ({ id, title, imgLink, color }) => {
  return (
    <div className={`carousel__item ${color}`}>
      <img className="carousel__item-img" src={imgLink} alt="" />
      <p className="carousel__item-title">{title}</p>
    </div>
  );
};

export default CarouselItem;
