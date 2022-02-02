import React from "react";

export default function Navbar() {
  return (
    <>
      {/* header section starts  */}
      <header>
        <div id="menu" className="fas fa-bars" />
        <a href="#" className="logo">
          <i className="fas fa-bone" />
          Dogster
        </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#category">category</a>
          <a href="#featured">featured</a>
          <a href="#products">products</a>
          <a href="#offer">offer</a>
          <a href="#contact">contact</a>
        </nav>
        <div className="icons">
          <i className="fas fa-search" id="search-icon" />
          <a href="#" className="fas fa-heart" />
          <a href="#" className="fas fa-shopping-cart" />
        </div>
        <form action id="search-box">
          <input type="search" id="search" placeholder="search here" />
          <label htmlFor="search" className="fas fa-search" />
        </form>
      </header>
      {/* header section ends */}
    </>
  );
}
