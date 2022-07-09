import React, { useState, useEffect, useCallback } from "react";
import Header from "./pages/Header/Header";
import Promo from "./components/Promo/Promo";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import axios from "axios";
import NotFound from "./pages/NotFound/NotFound";
import Basket from "./pages/Basket/Basket";
import Footer from "./pages/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setPizzas } from "./redux/slice/pizzasSlice";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza.items);

  const responsePizzas = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3002/pizzas");
      dispatch(setPizzas(data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    responsePizzas();
  }, []);

  // axios.get("http://localhost:3002/sushies").then(({ data }) => {
  //   setSushies(data);
  //   setIsLoading(false);
  // });
  // axios.get("http://localhost:3002/rolls").then(({ data }) => {
  //   setRolls(data);
  //   setIsLoading(false);
  // });
  // axios.get("http://localhost:3002/sets").then(({ data }) => {
  //   setSets(data);
  //   setIsLoading(false);
  // });

 

  return (
    <div className="app">
      <Promo />
      <Header />
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                pizzas={pizzas}
                // sushies={sushies}
                // rolls={rolls}
                // sets={sets}
                isLoading={isLoading}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
