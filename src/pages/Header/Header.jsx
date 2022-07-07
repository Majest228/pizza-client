import React, { useState, useEffect, useRef } from "react";
import Promo from "../../components/Promo/Promo";
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
      <div className="hr"></div>
      <Promo />
      <div className="header__container">
        <div className="header__content">
          <div className="header__content-left">
            <Link className="header__content-left-logo" to="/">
              <img src={logo} alt="" />
            </Link>
            <h3 className="header__content-left-text">Куда пицца</h3>
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
                  <div className="block">
                    <ul className="block-list">
                      <Link className="block-list__link" to="/">
                        Акции
                      </Link>
                      <Link className="block-list__link" to="/">
                        О компании
                      </Link>
                      <Link className="block-list__link" to="/">
                        Пользовательское соглашение
                      </Link>
                      <Link className="block-list__link" to="/">
                        Условия гарантии
                      </Link>
                      <Link className="block-list__link" to="/">
                        Ресторан
                      </Link>
                      <Link className="block-list__link" to="/">
                        Контакты
                      </Link>
                      <Link className="block-list__link" to="/">
                        Поддержка
                      </Link>
                      <Link className="block-list__link" to="/">
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
          <div className="header__content-right">
            <Trash changeShowBasket={changeShowBasket} />
          </div>
          {isShowBasket ? (
            <BasketBlock changeShowBasket={changeShowBasket} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
