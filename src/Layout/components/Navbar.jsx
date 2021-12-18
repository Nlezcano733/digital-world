import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <header className="nav flex-between align-baseline">
      <h1 className="nav-logo">
        <Link to="/">Digital World</Link>
      </h1>
      <nav className="nav-menu flex-between">
        <Link to={`/products/all`} className="nav-enlace">
          Catálogo
        </Link>
        <Link to={`/cart`} className="nav-enlace">
          <i className="fas fa-shopping-cart font-title-lg"></i>
          {/* {products.length > 0 ? <p className="inline-block">{`(${totalItems})`}</p> : <></>} */}
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;