import React from "react";
import "./SearchPanel.scss";

const SearchPanel = () => {
  return (
    <div className="searchPanel">
      <p className="searchPanel-title">Проверить адрес доставки</p>
      <input className="searchPanel-input" type="text" placeholder="Адрес" />
      <button className="searchPanel-button">Проверить</button>
    </div>
  );
};

export default SearchPanel;
