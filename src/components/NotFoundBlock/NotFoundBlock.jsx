import React from "react";
import Not from "../../assets/img/undraw.png";
import "./NotFoundBlock.scss";
const NotFoundBlock = () => {
  return (
    <div className="notFound">
      <img src={Not} alt="" />
      <h3>Страница не найдена!</h3>
    </div>
  );
};

export default NotFoundBlock;
