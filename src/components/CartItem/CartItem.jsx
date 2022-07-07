import React, { useEffect, useRef, useState } from "react";
import "./CartItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slice/cartSlice";

import Crest from "../../assets/img/crest.svg";

const CartItem = ({ item, closeModal }) => {
  const { imageUrl, id, title, description, price, types, sizes } = item;
  const typesName = ["Традиционное", "Тонкое"];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const dispatch = useDispatch();
  // const cartItem = useSelector((state) =>
  //   state.cart.items.find((obj) => obj.id === id)
  // );
  const onChangeActiveType = (id) => {
    setActiveType(id);
  };

  const onChangeActiveSize = (id) => {
    setActiveSize(id);
  };

  const onAddItem = () => {
    const obj = {
      id,
      imageUrl,
      title,
      description,
      price,
      types: typesName[activeType],
      sizes: activeSize,
    };
    dispatch(addItem(obj));
  };

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <img className="modal-content__img" src={item.imageUrl} alt="" />
          <div className="modal-content__body">
            <div className="modal-content__body__upper">
              <h3 className="modal-content__body__text">{title}</h3>
              <button onClick={closeModal}>
                <img src={Crest} alt="" />
              </button>
            </div>
            <div className="modal-content__body__products">
              <ul>
                {item.listProducts !== undefined
                  ? item.listProducts.map((item) => (
                      <div className="modal-content__body__products__list">
                        <li>
                          <img src={item.img} alt="" />
                        </li>
                        <p>{title}</p>
                      </div>
                    ))
                  : null}
              </ul>
            </div>
            <div className="modal-content__body__types">
              <ul>
                {item.types !== undefined
                  ? item.types.map((typeId, id) => (
                      <li
                        className={
                          activeType === id
                            ? "active"
                            : "modal-content__body__list"
                        }
                        onClick={() => onChangeActiveType(id)}
                      >
                        {typesName[typeId]}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
            <div className="modal-content__body__size">
              <ul>
                {item.sizes !== undefined
                  ? item.sizes.map((size, id) => (
                      <li
                        className={
                          activeSize === id
                            ? "active"
                            : "modal-content__body__list"
                        }
                        onClick={() => onChangeActiveSize(id)}
                      >
                        {size} {item.category == "Пицца" ? "см" : "шт"}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
            <h3 className="modal-content__body__products__text">
              Добавьте в пиццу
            </h3>
            <div className="modal-content__body__products">
              <ul>
                {item.listProducts !== undefined
                  ? item.listProducts.map((item) => (
                      <div className="modal-content__body__products__list">
                        <li>
                          <img src={item.img} alt="" />
                        </li>
                        <p>{item.title}</p>
                      </div>
                    ))
                  : null}
              </ul>
            </div>
            <div className="modal-content__body__footer">
              <div className="modal-content__body__footer__price">
                <p className="modal-content__body__footer__price__text">
                  Итого: {price} ₽
                </p>
                <p className="modal-content__body__footer__price__width">
                  400 г
                </p>
              </div>
              <button
                onClick={onAddItem}
                className="modal-content__body__footer__btn"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
