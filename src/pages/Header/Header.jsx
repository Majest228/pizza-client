import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/img/logo.svg";
import "./Header.scss";
import Trash from "../../components/Trash/Trash";
import { Link } from "react-router-dom";
import arrow from "../../assets/img/Arrowsvg.svg";
import BasketBlock from "../../components/BasketBlock/BasketBlock";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowBasket, setIsShowBasket] = useState(false);
  const modalRef = useRef();
  useEffect(() => {
    isShowBasket
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isShowBasket]);

  const changeShowBasket = () => {
    setIsShowBasket(!isShowBasket);
  };
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (!e.path.includes(modalRef.current)) {
        setIsShow(false);
      }
    });
  }, []);

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-content__left">
            <Link to="/" className="header-content__left__logo">
              <img
                className="header-content__left__logo__img"
                src={logo}
                alt=""
              />
              Куда пицца
            </Link>
          </div>
          <nav className="header-nav">
            <ul className="header-nav__list">
              <Link className="header-nav__list__link" to="/">
                Акции
              </Link>
              <Link className="header-nav__list__link" to="/">
                Пицца
              </Link>
              <Link className="header-nav__list__link" to="/">
                Суши
              </Link>
              <Link className="header-nav__list__link" to="/">
                Напитки
              </Link>
              <Link className="header-nav__list__link" to="/">
                Закуски
              </Link>
              <Link className="header-nav__list__link" to="/">
                Комбо
              </Link>
              <Link className="header-nav__list__link" to="/">
                Десерты
              </Link>
              <Link className="header-nav__list__link" to="/">
                Соусы
              </Link>
              <Link className="header-nav__list__link" to="/">
                <div
                  onClick={() => setIsShow(!isShow)}
                  ref={modalRef}
                  className="header-nav__list__link__block"
                >
                  <span>Другое</span>
                  <img src={arrow} alt="" />
                </div>
                {isShow ? (
                  <div className="header-nav__list__link__blockmodal">
                    <ul className="header-nav__list__link__blockmodal__list">
                      <Link
                        className="header-nav__list__link__blockmodal__list__link"
                        to="/"
                      >
                        Акции
                      </Link>
                      <Link
                        className="header-nav__list__link__blockmodal__list__link"
                        to="/"
                      >
                        О компании
                      </Link>
                      <Link
                        className="header-nav__list__link__blockmodal__list__link"
                        to="/"
                      >
                        Пользовательское соглашение
                      </Link>
                      <Link
                        className="header-nav__list__link__blockmodal__list__link"
                        to="/"
                      >
                        Условия гарантии
                      </Link>
                      <Link
                        className="header-nav__list__link__blockmodal__list__link"
                        to="/"
                      >
                        Ресторан
                      </Link>
                      <Link
                        className="header-nav__list__link__blockmodal__list__link"
                        to="/"
                      >
                        Контакты
                      </Link>
                      <Link
                        className="header-nav__list__link__blockmodal__list__link"
                        to="/"
                      >
                        Поддержка
                      </Link>
                      <Link
                        className="header-nav__list__link__blockmodal__list__link"
                        to="/"
                      >
                        Отследить заказ
                      </Link>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </Link>
            </ul>
          </nav>

          <div className="header-content__right">
            <Trash changeShowBasket={changeShowBasket} />
          </div>
          {isShowBasket ? (
            <BasketBlock changeShowBasket={changeShowBasket} />
          ) : (
            ""
          )}
          <div className="header-navmobile"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

