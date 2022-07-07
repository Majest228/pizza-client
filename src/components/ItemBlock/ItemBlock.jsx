import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CartItem from "../CartItem/CartItem";
import "./ItemBlock.scss";
import { addProduct } from "../../redux/slice/cartSlice";
const ItemBlock = ({ item }) => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    isModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isModal]);

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className="pizza__item">
      <img className="pizza__item-img" src={item.imageUrl} alt="" />
      <div className="pizza__item-text">
        <h3 className="pizza__item-title">{item.title}</h3>
        <p className="pizza__item-description">{item.description}</p>
      </div>
      <div className="pizza__item-footer">
        <button
          className="pizza__item-footer-btn"
          onClick={() => setIsModal(!isModal)}
        >
          Выбрать
        </button>
        <p className="pizza__item-footer-price">от {item.price} ₽</p>
      </div>
      {isModal ? <CartItem closeModal={closeModal} item={item} /> : ""}
    </div>
  );
};

export default ItemBlock;
