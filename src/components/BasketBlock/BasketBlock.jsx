import React from "react";
import "./BasketBlock.scss";
import { useNavigate } from "react-router-dom";
import crest from "../../assets/img/crest.svg";
import BasketBlockItem from "../BasketBlockItem/BasketBlockItem";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../../redux/slice/cartSlice";

const BasketBlock = ({ changeShowBasket }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { totalPrice } = useSelector((state) => state.cart);

  const onClearItems = () => {
    dispatch(clearItem());
  };

  return (
    <div className="basketblock">
      <div className="basketblock-modal">
        <div className="basketblock-container">
          <div className="basketblock-content">
            <div className="basketblock-content__text">
              <h3 className="basketblock-title">Ваш заказ </h3>
              <button onClick={changeShowBasket}>
                <img src={crest} alt="" />
              </button>
            </div>
            {items.map((item) => (
              <BasketBlockItem
                title={item.title}
                imageUrl={item.imageUrl}
                id={item.id}
                description={item.description}
                price={item.price}
                count={item.count}
              />
            ))}
            <div className="basketblock-content__footer">
              <span>Итого: {totalPrice} ₽</span>
              <button
                className="basketblock-content__footer__btn"
                onClick={() => {
                  navigate(`/basket`);
                  changeShowBasket();
                }}
              >
                Оформить заказ
              </button>
              <button
                className="basketblock-content__footer__btn__clear"
                onClick={onClearItems}
              >
                Очистить корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketBlock;
