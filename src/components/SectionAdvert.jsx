import React from "react";
import "../Sass/sectionadver.scss";
import { TeamData } from "../libs/data";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import img from "../images/customer/c1.png"
import img2 from "../images/dishes/d1.png"
import img3 from "../images/offer_bg.11cee991aea9f19b4cb6.jpg"
const SectionAdvert = () => {
  return (
    <div className="Wrapper">
      <div className="image-a">
        <div>
          <img src={img3} alt="" />
        </div>
        <div className="image-b">
          <span>Special Kombo Pack</span>
          <span>WE MAKE THE BEST * BURGER IN YOUR TOWN</span>
          <p>
            As well known and we are very busy all days advice you. advice you
            to call us of before arriving, so we can guarantee your seat. advice
            you to call us of before arriving As well known and we are very busy
            all days advice you
          </p>
        </div>
      </div>
      <div>
        <div className="row">
          <span>Our Professional</span>
          <span>MEET OUR STUFF</span>
        </div>
        <div className="team-container">
          {TeamData.map((item) => (
            <div key={item.id} className="teamdata">
              <div className="image-a-team">
                <img src={item.img} alt="" />
              </div>
              <div className="title-a">
                <span>{item.title}</span>
                <span>{item.exprience}</span>
              </div>
              <div className="social-a">
                {item.socialmedia.map((item) => (
                  <div key={item.type} className="social-b">
                    <Link target="_blank" to={item.link}>
                      <img src={item.type} alt="" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="customer">
        <div className="row">
          <div className="cust_a">
            <div className="__a">
              <span>Customer Feedback</span>
              <span>WHAT DO OUR CLIENTS SAY?</span>
            </div>
            <div className="__b">
              <p>
                Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. ore eu fuulla pariatur.
                Excepteur sint occaecat cupidatat non proideney.
              </p>
            </div>
          </div>
          <div className="customer__b">
            <div className="__a">
              <span className="number">14k+</span>
              <span>HAPPY CUSTOMER</span>
            </div>
            <div className="__b">
              <span className="number">16k+</span>
              <span>AWARD WINING</span>
            </div>
            <div className="__c">
              <span className="number">68k+</span>
              <span>FOOD MENU</span>
            </div>
          </div>
        </div>
        <div className="customer__a">
          <div className="__a">
            <div className="__b">
              <img src={img} alt="" />
            </div>
            <div className="__c">
              <p>
                Great food! Fresh, quick, friendly, delicious, affordable! Very
                flexible with orders. Great service! Great portions! If you want
                great seafood, this place will not disappoint you. Definitely.
              </p>
              <span className="title">Ronalnd D. Morgan</span>
              <span className="descp">Founder & co</span>
              <div className="__d">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaRegStar />
                </span>
                <span>
                  <FaRegStar />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-blog">
        <div className="row">
          <span>Products</span>
          <span>Most recently added products</span>
        </div>
        <div className="__a">
          <div className="__b">
            <span>20/12/2024</span>
            <span>BEST BURGER IN YOUR SOCIAL</span>
            <img src={img2} alt="" />
            <div className="__c">
              <span><FaLongArrowAltRight /></span>
              <span>READ MORE</span>
            </div>
          </div>
          <div className="__b">
            <span>20/12/2024</span>
            <span>BEST BURGER IN YOUR SOCIAL</span>
            <img src={img2} alt="" />
            <div className="__c">
              <span><FaLongArrowAltRight /></span>
              <span>READ MORE</span>
            </div>
          </div>
          <div className="__b">
            <span>20/12/2024</span>
            <span>BEST BURGER IN YOUR SOCIAL</span>
            <img src={img2} alt="" />
            <div className="__c">
              <span><FaLongArrowAltRight /></span>
              <span>READ MORE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAdvert;
