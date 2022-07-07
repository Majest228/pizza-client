import React from "react";
import "./Promo.scss";
import gps from "../../assets/img/gps.svg";
import arrow from "../../assets/img/Arrowsvg.svg";
import user from "../../assets/img/user.svg";

const Promo = () => {
  return (
    <div className="promo">
      <div className="promo__container">
        <div className="promo__content">
          <div className="promo__content-left">
            <div className="promo__content-left-gps">
              <img src={gps} alt="" className="promo__content-left-gps-img" />
              <h3 className="promo__content-left-gps-text">Москва</h3>
              <button className="promo__content-left-gps-arrow">
                <img
                  src={arrow}
                  alt=""
                  className="promo__content-left-gps-imgArrow"
                />
              </button>
            </div>
            <div className="promo__content-left-check">
              <p className="promo__content-left-check-text">Проверить адрес</p>
            </div>
            <div className="promo__content-left-delivery">
              <p className="promo__content-left-delivery-text">
                Среднее время доставки*:<span className="time">00:24:19</span>
              </p>
            </div>
          </div>
          <div className="promo__content-right">
            <div className="promo__content-right-time">
              <p className="promo__content-right-time-text">
                Время работы: с 11:00 до 23:00
              </p>
            </div>
            <div className="promo__content-right-user">
              <img
                src={user}
                className="promo__content-right-user-img"
                alt=""
              />
              <p className="promo__content-right-user-text">Войти в аккаунт</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
