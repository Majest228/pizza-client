import React from "react";
import MenuList from "../../components/MenuList/MenuList";
import Carousel from "../../components/Carousel/Carousel";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import ItemBlock from "../../components/ItemBlock/ItemBlock";
import SkeletonItemBlock from "../../components/SkeletonItemBlock/SkeletonItemBlock";
import "./Home.scss";

const Home = ({ pizzas, sushies, rolls, sets, isLoading }) => {
  const skeleton = [...new Array(12)].map((_, idx) => (
    <div className="test">
      <SkeletonItemBlock key={idx} />
    </div>
  ));
  const pizzasList = pizzas.map((pizza) => <ItemBlock item={pizza} />);
  const sushiesList = sushies.map((sushi) => <ItemBlock item={sushi} />);
  const rollsList = rolls.map((roll) => <ItemBlock item={roll} />);
  const setsList = sets.map((sets) => <ItemBlock item={sets} />);
  return (
    <div>
      <MenuList />
      <Carousel />
      <SearchPanel />
      <div>
        <h2 className="title">Пицца</h2>
      </div>
      <div className="container-items">{isLoading ? skeleton : pizzasList}</div>
      <h2 className="title">Роллы</h2>
       <div className="container-items" id="sushi">
        {isLoading ? skeleton : sushiesList}
      </div> 
      <h2 className="title">Суши</h2>
      <div className="container-items">{isLoading ? skeleton : rollsList}</div>
      <h2 className="title">Сеты</h2>
      <div className="container-items">{isLoading ? skeleton : setsList}</div> 
    </div>
  );
};

export default Home;
