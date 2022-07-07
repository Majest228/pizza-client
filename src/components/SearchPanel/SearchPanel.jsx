import React from "react";
import "./SearchPanel.scss";

const SearchPanel = () => {
  return (
    <div className="searchPanel">
      <p className="searchPanel__title">Проверить адрес доставки</p>
      <input className="searchPanel__input" type="text" placeholder="Адрес" />
      <button className="searchPanel__button">Проверить</button>
    </div>
  );
};

export default SearchPanel;
