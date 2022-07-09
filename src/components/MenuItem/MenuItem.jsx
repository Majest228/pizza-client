import React from "react";
import "./MenuItem.scss";

const MenuItem = ({ imageUrl, title, linkUrl }) => {
  return (
    <a href={`#${linkUrl}`}>
      <div className="menu-item">
        <img className="menu-item__img" src={imageUrl} alt="" />
        <h3 className="menu-item__title">{title}</h3>
      </div>
    </a>
  );
};

export default MenuItem;
