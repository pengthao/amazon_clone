import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71CkwcSsmjL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
            <Product
                id="12345"
                title="The Lean Startup"
                price={29.99}
                image="https://m.media-amazon.com/images/I/61BFOf9Ap-L._SL1200_.jpg"
                rating={5}
            />
            <Product 
            id="12345"
            title="Stanley Cup"
            price={45.00}
            image="https://m.media-amazon.com/images/I/51bUETp1j1L._AC_SL1500_.jpg"
            rating={4}
            
            />
        </div>

        <div className="home__row">
            <Product />
            <Product />
            <Product />
        </div>

        <div className="home__row">
            <Product />
        </div>

      </div>
    </div>
  );
}

export default Home;
