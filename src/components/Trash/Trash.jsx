import React from "react";
import { useSelector } from "react-redux";
import trash from "../../assets/img/trash.svg";
import './Trash.scss'

const Trash = ({ changeShowBasket }) => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <button
      onClick={changeShowBasket}
      className="header-content__right__basket"
    >
      <div className="header-content__right__basket__left">
        <img src={trash} alt="" />
        <p className="header-content__right__basket__text">
          {totalPrice} <span>₽</span>
        </p>
      </div>
      <span>|</span>
      <div className="header-content__right__basket__right">{totalCount}</div>
    </button>
  );
};

export default Trash;
