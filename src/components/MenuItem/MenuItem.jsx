import React from "react";
import "./MenuItem.scss";

const MenuItem = ({ imageUrl, title, linkUrl }) => {
  return (
    <a href={`#${linkUrl}`}>
      <div className="menu__item">
        <img className="menu__item-img" src={imageUrl} alt="" />
        <h3 className="menu__item-title">{title}</h3>
      </div>
    </a>
  );
};

export default MenuItem;
