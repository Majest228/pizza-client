import React from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import setPizza from "../../assets/img/setPizza.png";
import pizzaBox from "../../assets/img/boxPizza.png";
import "./Carousel.scss";

const Carousel = () => {
  const actions = [
    {
      id: 1,
      title: "3 средние пиццы от 999 рублей",
      imgLink: setPizza,
      color: "orange",
    },
    {
      id: 2,
      title: "Кэшбек 10% на самовывоз (доставка)",
      imgLink: pizzaBox,
      color: "red",
    },
    {
      id: 3,
      title: "3 средние пиццы от 999 рублей",
      imgLink: setPizza,
      color: "orange",
    },
    {
      id: 4,
      title: "Кэшбек 10% на самовывоз (доставка)",
      imgLink: pizzaBox,
      color: "red",
    },
    {
      id: 5,
      title: "3 средние пиццы от 999 рублей",
      imgLink: setPizza,
      color: "orange",
    },
    {
      id: 6,
      title: "Кэшбек 10% на самовывоз (доставка)",
      imgLink: pizzaBox,
      color: "red",
    },
  ];
  return (
    <div className="carousel">
      {actions
        .filter((item) => item.id < 5)
        .map((item) => (
          <CarouselItem
            key={item.id}
            id={item.id}
            imgLink={item.imgLink}
            title={item.title}
            color={item.color}
          />
        ))}
    </div>
  );
};

export default Carousel;
