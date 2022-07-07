import React from "react";
import "./Footer.scss";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import gps from "../../assets/img/footergps.svg";
import phone from "../../assets/img/phone.svg";
import facebok from "../../assets/img/facebok.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-content__logo">
            <div className="footer-content__logo__block">
              <Link className="footer-content__logo___block__link" to="/">
                <img src={logo} alt="" />
              </Link>
              <h3 className="footer-content__logo__block__title">Куда пицца</h3>
            </div>
            <p className="footer-content__logo__copyright">
              © Copyright 2021 — Куда Пицца
            </p>
          </div>
          <nav className="footer-content__about">
            <h3 className="footer-content__about__title">Куда пицца</h3>
            <ul className="footer-content__about__list">
              <Link className="footer-content__about__list__link" to="/">
                О компании
              </Link>
              <Link className="footer-content__about__list__link" to="/">
                Пользовательское соглашение
              </Link>
              <Link className="footer-content__about__list__link" to="/">
                Условия гарантии
              </Link>
            </ul>
          </nav>
          <nav className="footer-content__about">
            <h3 className="footer-content__about__title">Помощь</h3>
            <ul className="footer-content__about__list">
              <Link className="footer-content__about__list__link" to="/">
                Ресторан
              </Link>
              <Link className="footer-content__about__list__link" to="/">
                Контакты
              </Link>
              <Link className="footer-content__about__list__link" to="/">
                Поддержка
              </Link>
              <Link className="footer-content__about__list__link" to="/">
                Отследить заказ
              </Link>
            </ul>
          </nav>
          <nav className="footer-content__social">
            <h3 className="footer-content__social__title">Контакты</h3>
            <ul className="footer-content__social__list">
              <div className="footer-content__social__list__block">
                <img src={phone} alt="" />
                <Link className="footer-content__about__list__link" to="/">
                  +7 (926) 223-10-11
                </Link>
              </div>
              <div className="footer-content__social__list__block">
                <img src={gps} alt="" />
                <Link className="footer-content__about__list__link" to="/">
                  Москва, ул. Юных Ленинцев, д.99
                </Link>
              </div>
              <div className="footer-content__social__list__block">
                <img src={facebok} alt="" />
                <Link className="footer-content__about__list__link" to="/">
                  Facebok
                </Link>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
