import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { decItem, incItem, removeItem } from "../../redux/slice/cartSlice";
import cross from "../../assets/img/Cross.png";
import "./BasketBlockItem.scss";

const BasketBlockItem = ({
  imageUrl,
  id,
  title,
  description,
  price,
  count,
}) => {
  const dispatch = useDispatch();

  const onIncItem = () => {
    dispatch(incItem({ id }));
  };

  const onDecItem = () => {
    dispatch(decItem({ id }));
  };

  const onDeleteItem = () => {
    dispatch(removeItem(id));
  };

  const buttonRef = useRef();
  return (
    <div className="basketblock-content__block">
      <img src={imageUrl} alt="" />
      <div className="basketblock-content__block__text">
        <div className="basketblock-content__block__text__title">
          <h3>{title}</h3>
          <button onClick={onDeleteItem} className="btn">
            <img src={cross} alt="" />
          </button>
        </div>
        <p>{description}</p>
        <div className="basketblock-content__block__change">
          <div className="basketblock-content__block__change__count">
            <button
              ref={buttonRef}
              disabled={count > 1 ? false : true}
              onClick={onDecItem}
            >
              -
            </button>
            <span>{count}</span>
            <button onClick={onIncItem}>+</button>
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
