import React from "react";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "../Sass/offer.scss";
import { GiChickenOven } from "react-icons/gi";

const Offer = () => {
  return (
    <div className="Offer-container">
      <section className="offer">
        <div className="offer-wrapper">
          <span>
            <FaYoutube size={40} />
          </span>
          <span>
            <BsTwitterX size={35} />
          </span>
          <span >
            <FaFacebookF size={35} /> 
          </span>
        </div>
        <div className="container">
          <div className="row">
            <span>OUR POPULAR MENU</span>
            <span>WENT TO EAT</span>
          </div>
          <div className="content">
            <div className="container-wrapper">
              <div className="wrapper">
                <span><GiChickenOven size={50}/></span>
                <span className="number">01</span>
              </div>
              <div className="wrapper1">
                <span className="text">Chicken</span>
                <span className="text-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, fugit.
                </span>
                <span>
                  <img src="/src/images/menu/menu1.png" alt="" />
                </span>
              </div>
            </div>
            <div className="container-wrapper">
              <div className="wrapper">
                <span><GiChickenOven size={50}/></span>
                <span className="number">02</span>
              </div>
              <div className="wrapper1">
                <span className="text">Chicken</span>
                <span className="text-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, fugit.
                </span>
                <span>
                  <img src="/src/images/menu/menu1.png" alt="" />
                </span>
              </div>
            </div>
            <div className="container-wrapper">
              <div className="wrapper">
                <span><GiChickenOven size={50}/></span>
                <span className="number">03</span>
              </div>
              <div className="wrapper1">
                <span className="text">Chicken</span>
                <span className="text-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, fugit.
                </span>
                <span>
                  <img src="/src/images/menu/menu1.png" alt="" />
                </span>
              </div>
            </div>
            <div className="container-wrapper">
              <div className="wrapper">
                <span><GiChickenOven size={50}/></span>
                <span className="number">04</span>
              </div>
              <div className="wrapper1">
                <span className="text">Chicken</span>
                <span className="text-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione, fugit.
                </span>
                <span>
                  <img src="/src/images/menu/menu1.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
