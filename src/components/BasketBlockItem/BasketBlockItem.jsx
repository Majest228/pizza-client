import React from "react";

const BasketBlockItem = ({
  imageUrl,
  id,
  title,
  description,
  price,
  count,
}) => {
  return (
    <div className="basketblock-content__block">
      <img src={imageUrl} alt="" />
      <div className="basketblock-content__block__text">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="basketblock-content__block__change">
          <div className="basketblock-content__block__change__count">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <span className="basketblock-content__block__change__price">
            {price * count} ₽
          </span>
        </div>
      </div>
    </div>
  );
};

export default BasketBlockItem;
