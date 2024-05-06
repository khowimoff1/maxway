import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Page/Home";
import AboutUs from "./Page/AboutUs";
import Contact from "./Page/Contact";
import Branches from "./Page/Branches";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Shop from "./Page/Shop";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [allPrice, setAllPrice] = useState(0);
  const [language, setLaguage] = useState("uz");

  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header
          allPrice={allPrice}
          language={language}
          setLaguage={setLaguage}
        />
        <Routes>
          <Route
            path="/"
            element={<Home allPrice={allPrice} setAllPrice={setAllPrice} />}
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/branches" element={<Branches />} />
          <Route
            path="/shop"
            element={<Shop allPrice={allPrice} setAllPrice={setAllPrice} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
