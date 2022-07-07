import React from "react";
import "./BasketItem.scss";

const BasketItem = ({ imageUrl, id, title, description, price, count }) => {
  return (
    <div className="basket">
      <div className="basket-content">
        <div className="basket-content__block">
          <div className="basket-content__block__body">
            <img src={imageUrl} alt="" />
            <div className="basket-content__block__body__text">
              <p className="basket-content__block__body__text__name">{title}</p>
              <p className="basket-content__block__body__text__descr">
                {description}
              </p>
            </div>
          </div>
          <div className="basket-content__block__price">
            <div className="basket-content__block__price__count">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <p className="basket-content__block__price__text">
              {price * count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
