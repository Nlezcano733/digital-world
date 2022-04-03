import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../Hooks/useWindowSize";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const { status } = useWindowSize();

  return (
    <>
      <header className="nav">
        <div className="container flex-between align-baseline">
          <h1 className="nav-logo">
            <Link to="/">Digital World</Link>
          </h1>
          {
            status
              ? (
                <nav className="nav-menu flex-between">
                  <Link
                    to={`/products`}
                    className="nav-enlace"
                  >
                    Products
                  </Link>
                  <Link
                    to={`/cart`}
                    className="nav-enlace"
                  >
                    <i className="fas fa-shopping-cart font-title-lg"></i>
                  </Link>
                </nav>
              )
              : (
                <div className="nav-enlace" onClick={() => setActiveNav(!activeNav)}>
                  <i className={`fas fa-${activeNav ? "times" : "bars"} font-title-lg`}></i>
                </div>
              )
          }
        </div>
      </header>
      {
        activeNav
          ? (
            <div className="nav-mobile">
              <Link
                to={`/products/hardware`}
                className="nav-enlace"
                onClick={() => setActiveNav(false)}
              >
                Hardware
              </Link>
              <Link
                to={`/products/games`}
                className="nav-enlace"
                onClick={() => setActiveNav(false)}
              >
                Games
              </Link>
              <Link
                to={`/products/software`}
                className="nav-enlace"
                onClick={() => setActiveNav(false)}
              >
                Software
              </Link>
              <Link
                to={`/cart`}
                className="nav-enlace"
                onClick={() => setActiveNav(false)}
              >
                Cart
              </Link>
            </div>
          )
          : <></>
      }
    </>
  );
};

export default Navbar;