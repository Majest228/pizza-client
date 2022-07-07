import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import fire from "../../assets/img/Fire.svg";
import pizza from "../../assets/img/pizza.svg";
import sushi from "../../assets/img/sushi.svg";
import drinks from "../../assets/img/drinks.svg";
import combo from "../../assets/img/combo.svg";
import sneaks from "../../assets/img/sneaks.svg";
import souce from "../../assets/img/souce.svg";
import dessert from "../../assets/img/Dessert.svg";
import "./MenuList.scss";

const MenuList = () => {
  const menu = [
    {
      id: 1,
      title: "Акции",
      imageUrl: fire,
      linkUrl: "action",
    },
    {
      id: 2,
      title: "Пицца",
      imageUrl: pizza,
      linkUrl: "pizzas",
    },
    {
      id: 3,
      title: "Суши",
      imageUrl: sushi,
      linkUrl: "sushi",
    },
    {
      id: 4,
      title: "Напитки",
      imageUrl: drinks,
      linkUrl: "drinks",
    },
    {
      id: 5,
      title: "Закуски",
      imageUrl: sneaks,
      linkUrl: "snacks",
    },
    {
      id: 6,
      title: "Комбо",
      imageUrl: combo,
      linkUrl: "combo",
    },
    {
      id: 7,
      title: "Десерты",
      imageUrl: dessert,
      linkUrl: "dessert",
    },
    {
      id: 8,
      title: "Соусы",
      imageUrl: souce,
      linkUrl: "souce",
    },
  ];
  return (
    <div className="menu__list">
      {menu.map((item) => (
        <MenuItem
          imageUrl={item.imageUrl}
          linkUrl={item.linkUrl}
          title={item.title}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default MenuList;
