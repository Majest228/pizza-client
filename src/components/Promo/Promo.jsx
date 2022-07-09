import React from "react";
import "./Promo.scss";
import gps from "../../assets/img/gps.svg";
import arrow from "../../assets/img/Arrowsvg.svg";
import user from "../../assets/img/user.svg";

const Promo = () => {
  return (
    <div className="promo">
      <div className="promo-container">
        <div className="promo-content">
          <div className="promo-content__left">
            <div className="promo-content__left__gps">
              <img src={gps} alt="" className="promo-content__left__gps__img" />
              <h3 className="promo-content__left__gps__title">Москва</h3>
              <button className="promo-content__left__gps__choose">
                <img
                  src={arrow}
                  alt=""
                  className="promo-content__left__gps__choose__arrow"
                />
              </button>
            </div>
            <div className="promo-content__left__address">
              <p className="promo-content__left__address__text">
                Проверить адрес
              </p>
            </div>
            <div className="promo-content__left__time">
              <p className="promo-content__left__time__text">
                Среднее время доставки*:
                <span className="promo-content__left__time__text__time">
                  00:24:19
                </span>
              </p>
            </div>
          </div>
          <div className="promo-content__right">
            <div className="promo-content__right__work">
              <p className="promo-content__right__work__text">
                Время работы: с 11:00 до 23:00
              </p>
            </div>
            <div className="promo-content__right__login">
              <img
                src={user}
                className="promo-content__right__login__img"
                alt=""
              />
              <button className="promo-content__right__login__text">
                Войти в аккаунт
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Promo;
