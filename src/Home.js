import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.imgur.com/SYHeuYM.jpg"
          alt="Image"
        />
        <div className="home__row">
          <Product
            title="The Lean Startup"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/51CTIr1bJxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
          />
          <Product
            title="Samsung Galaxy M12 (Blue,6GB RAM, 128GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate"
            price={99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41lVDJm6sIL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Samsung 138 cm (55 inches) Crystal 4K Series Ultra HD Smart LED TV UA55AUE60AKLXL (Black) (2021 Model)"
            price={999.9}
            image="https://images-na.ssl-images-amazon.com/images/I/61GwJAhftvS._SL1500_.jpg"
            rating={5}
          />

          <Product
            title="boAt Airdopes 433 Twin Wireless Ear-Buds with Mic(Black)"
            price={799.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51x00TKVjLS._SL1500_.jpg"
            rating={5}
          />

          <Product
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
            price={769.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61XclfIKcbL._SL1000_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
