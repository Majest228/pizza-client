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
import {
  setPizzas,
  setSushies,
  setRolls,
  setSets,
} from "./redux/slice/productsSlice";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.products.pizzas);
  const sushies = useSelector((state) => state.products.sushies);
  const rolls = useSelector((state) => state.products.rolls);
  const sets = useSelector((state) => state.products.sets);

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

  const responseSushies = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3002/sushies");
      dispatch(setSushies(data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const responseRolls = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3002/rolls");
      dispatch(setRolls(data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const responseSets = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3002/sets");
      dispatch(setSets(data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    responsePizzas();
    responseSushies();
    responseRolls();
    responseSets()
  }, []);

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
                sushies={sushies}
                rolls={rolls}
                sets={sets}
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
