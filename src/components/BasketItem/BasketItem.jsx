import React from "react";
import { decItem, incItem } from "../../redux/slice/cartSlice";
import "./BasketItem.scss";
import { useDispatch, useSelector } from "react-redux";

const BasketItem = ({ imageUrl, id, title, description, price, count }) => {
  const dispatch = useDispatch();
  const { totalPrice } = useSelector((state) => state.cart);

  const onIncItem = () => {
    dispatch(incItem({ id }));
  };

  const onDecItem = () => {
    dispatch(decItem({ id }));
  };

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
              <button onClick={onDecItem}>-</button>
              <span>{count}</span>
              <button onClick={onIncItem}>+</button>
            </div>
            <p className="basket-content__block__price__text">
              {price * count} ₽
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
