import React, { useState, useEffect } from "react";
import Header from "./pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import axios from "axios";
import NotFound from "./pages/NotFound/NotFound";
import Basket from "./pages/Basket/Basket";
import Footer from "./pages/Footer/Footer";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [rolls, setRolls] = useState([]);
  const [sushies, setSushies] = useState([]);
  const [sets, setSets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3002/pizzas").then(({ data }) => {
      setPizzas(data);
      setIsLoading(false);
    });
    axios.get("http://localhost:3002/sushies").then(({ data }) => {
      setSushies(data);
      setIsLoading(false);
    });
    axios.get("http://localhost:3002/rolls").then(({ data }) => {
      setRolls(data);
      setIsLoading(false);
    });
    axios.get("http://localhost:3002/sets").then(({ data }) => {
      setSets(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="app">
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
