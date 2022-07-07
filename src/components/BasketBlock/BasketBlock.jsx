import React from "react";
import "./BasketBlock.scss";
import { useNavigate } from "react-router-dom";
import crest from "../../assets/img/crest.svg";
import BasketBlockItem from "../BasketBlockItem/BasketBlockItem";
import { useDispatch, useSelector } from "react-redux";

const BasketBlock = ({ changeShowBasket }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  return (
    <div className="basketblock">
      <div className="basketblock-modal">
        <div className="basketblock-container">
          <div className="basketblock-content">
            <div className="basketblock-content__text">
              <h3 className="basketblock-title">Ваш заказ</h3>
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
              <span>Итого: 0₽</span>
              <button
                onClick={() => {
                  navigate(`/basket`);
                  changeShowBasket();
                }}
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketBlock;
