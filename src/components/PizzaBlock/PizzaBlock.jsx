import React from "react";
import "./PizzaBlock.scss";

const PizzaBlock = ({ item }) => {
  return (
    <div className="pizza__item">
      <img className="pizza__item-img" src={item.imageUrl} alt="" />
      <div className="pizza__item-text">
        <h3 className="pizza__item-title">{item.title}</h3>
        <p className="pizza__item-description">{item.description}</p>
      </div>
      <div className="pizza__item-footer">
        <button className="pizza__item-footer-btn">Выбрать</button>
        <p className="pizza__item-footer-price">от {item.price} ₽</p>
      </div>
    </div>
  );
};

export default PizzaBlock;
