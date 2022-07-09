import React, { useState } from "react";
import Pizza from "../../assets/pizzas/test.png";
import BasketItem from "../../components/BasketItem/BasketItem";
import "./Basket.scss";
import Send from "../../assets/img/Send.svg";
import { useDispatch, useSelector } from "react-redux";

const Basket = () => {
  const typeDelivery = ["Доставка", "Самовывоз"];
  const typeTime = ["Как можно скорее", "По времени"];
  const typePay = ["Наличными", "Картой", "Apple Pay"];
  const typeChange = ["Без сдачи", "Сдача с"];
  const [activeTypeDelivery, setActiveTypeDelivery] = useState(typeDelivery[0]);
  const [activeTypeTime, setActiveTypeTime] = useState(typeTime[0]);
  const [activeTypePay, setActiveTypePay] = useState(typePay[0]);
  const [activeTypeChange, setActiveTypeChange] = useState(typeChange[0]);
  const [change, setChange] = useState(0);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const onChangeActiveTypeDelivery = (id) => {
    setActiveTypeDelivery(id);
  };
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="basket">
      <div className="basket-container">
        <h3 className="basket-title">Ваш заказ</h3>
        {items.map((item) => (
          <BasketItem
            title={item.title}
            imageUrl={item.imageUrl}
            id={item.id}
            description={item.description}
            price={item.price}
            count={item.count}
          />
        ))}

        <div className="basket-fullprice">
          <div className="basket-fullprice__promo">
            <input type="text" placeholder="Промокод" />
            <button className="basket-fullprice__promo__send">
              <img src={Send} alt="" />
            </button>
          </div>
          <p className="basket-fullprice__text">Итого: {totalPrice} ₽</p>
        </div>
        <div className="basket-info">
          <div className="basket-info__about">
            <h3 className="basket-info__about__text">О вас</h3>
            <div className="basket-info__about__content">
              <div className="basket-info__about__content__name">
                <span>Имя*</span>
                <input type="text" placeholder="Алексей" />
              </div>
              <div className="basket-info__about__content__phone">
                <span>Номер телефона*</span>
                <input type="text" placeholder="+7" />
              </div>
              <div className="basket-info__about__content__mail">
                <span>Почта</span>
                <input type="text" placeholder="mail@gmail.com" />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="basket-info__delivery">
            <div className="basket-info__delivery__block">
              <h3 className="basket-info__delivery__text">Доставка</h3>
              <ul>
                {typeDelivery.map((item, id) => (
                  <li
                    className={
                      activeTypeDelivery === id
                        ? "active"
                        : "basket-info__delivery__list"
                    }
                    onClick={() => onChangeActiveTypeDelivery(id)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="basket-info__delivery__content">
              <div className="basket-info__delivery__content__street">
                <span>Улица*</span>
                <input type="text" placeholder="Пушкина" />
              </div>
              <div className="basket-info__delivery__content__more">
                <div className="basket-info__delivery__content__more__house">
                  <span>Дом</span>
                  <input type="text" placeholder="1а" />
                </div>
                <div className="basket-info__delivery__content__more__entrance">
                  <span>Подъезд</span>
                  <input type="text" placeholder="1" />
                </div>
                <div className="basket-info__delivery__content__more__floor">
                  <span>Этаж</span>
                  <input type="text" placeholder="2" />
                </div>
                <div className="basket-info__delivery__content__more__flat">
                  <span>Квартира</span>
                  <input type="text" placeholder="3" />
                </div>
                <div className="basket-info__delivery__content__more__intercom">
                  <span>Домофон</span>
                  <input type="text" placeholder="0000" />
                </div>
              </div>
              <div className="basket-info__delivery__content__time">
                <span className="basket-info__delivery__content__time__title">
                  Когда выполнить заказ?
                </span>
              </div>
              <div className="basket-info__delivery__content__time__choose">
                {typeTime.map((item, id) => (
                  <>
                    <input
                      type="radio"
                      checked={activeTypeTime === item}
                      onChange={(e) => setActiveTypeTime(e.currentTarget.value)}
                      value={item}
                      className="basket-info__delivery__content__time__radio"
                    />
                    <span className="basket-info__delivery__content__time__radio__text">
                      {item}
                    </span>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="basket-info__pay">
            <h3 className="basket-info__pay__title">Оплата</h3>
            <div className="basket-info__pay__content">
              {typePay.map((item, id) => (
                <>
                  <input
                    type="radio"
                    checked={activeTypePay === item}
                    onChange={(e) => {
                      setActiveTypePay(e.currentTarget.value);
                    }}
                    value={item}
                    className="basket-info__delivery__content__time__radio"
                  />
                  <span className="basket-info__delivery__content__time__radio__text">
                    {item}
                  </span>
                </>
              ))}
            </div>
          </div>
          <div className="line"></div>
          <div className="basket-info__change">
            <h3 className="basket-info__change__title">Сдача</h3>
            <div className="basket-info__change__content">
              {typeChange.map((item, id) => (
                <>
                  <input
                    type="radio"
                    checked={activeTypeChange === item}
                    onChange={(e) => {
                      setActiveTypeChange(e.currentTarget.value);
                    }}
                    value={item}
                    className="basket-info__delivery__content__time__radio"
                  />
                  <span className="basket-info__delivery__content__time__radio__text">
                    {item}
                  </span>
                </>
              ))}
              {activeTypeChange === typeChange[1] ? (
                <>
                  <input
                    className="basket-info__change__input"
                    type="text"
                    placeholder="0"
                    onChange={(e) => setChange(e.target.value)}
                  />
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="line"></div>
          <div className="basket-info__comment">
            <h3 className="basket-info__comment__title">Комментарий</h3>
            <div className="basket-info__comment__content">
              <input
                className="basket-info__comment__content__textarea"
                type="text"
                placeholder="Есть уточнения?"
              />
            </div>
          </div>
          <div className="line"></div>
          <div className="basket-info__footer">
            <span className="basket-info__footer__price">
              Итого: {totalPrice} ₽
            </span>
            <button className="basket-info__footer__btn">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
