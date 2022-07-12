import React, { useState, useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import "./ItemBlock.scss";

const ItemBlock = ({ item }) => {
  const [isModal, setIsModal] = useState(false);
  console.log(isModal)
  useEffect(() => {
    isModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isModal]);


  const shortTitle =
    item.description.length > 50
      ? item.description.slice(0, 50) + "..."
      : item.description;
  return (
    <div className="pizza__item">
      <img className="pizza__item-img" src={item.imageUrl} alt="" />
      <div className="pizza__item-text">
        <h3 className="pizza__item-title">{item.title}</h3>
        <p className="pizza__item-description">{shortTitle}</p>
      </div>
      <div className="pizza__item-footer">
        <button
          className="pizza__item-footer-btn"
          onClick={() => setIsModal(true)}
        >
          Выбрать
        </button>
        <p className="pizza__item-footer-price">от {item.price} ₽</p>
      </div>
      {isModal ? <CartItem setIsModal={setIsModal} item={item} /> : ""}
    </div>
  );
};

export default ItemBlock;
