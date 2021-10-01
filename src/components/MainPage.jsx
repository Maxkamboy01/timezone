import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "../style.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import About from "./About.jsx";
import Latest from "./Latest.jsx";
import Blog from "./Blog/index.jsx";
import Blogdetails from "./BlogDetails/index.jsx";
import Login from "./Pages/Login/index";
import Cart from "./Pages/Cart/index";
import Element from "./Pages/Element/index";
import Confirm from "./Pages/Confirmation/index";
import Checkout from "./Pages/Checkout/index";
import Contact from "./Contact/index.jsx";
import { ReactComponent as UpArrow } from "./assets/icons/upload.svg";
import { ButtonnUp } from "./MainPagestyle";

import React, { useState } from "react";

function MainPage() {
  const [navbar, setNavbar] = useState(false);
  const scrollEvent = () => {
    if (window.pageYOffset > 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  return (
    <div style={{paddingTop: "15vh"}} onWheel={scrollEvent}>
      <BrowserRouter>
        <Navbar navbarposition={navbar} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/latest">
            <Latest />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blogdetails">
            <Blogdetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/element">
            <Element />
          </Route>
          <Route path="/confirm">
            <Confirm />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <ButtonnUp sticked={navbar} className="upbutton" href="#">
          <UpArrow />
        </ButtonnUp>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default MainPage;
