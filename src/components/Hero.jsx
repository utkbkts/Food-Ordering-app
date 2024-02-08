import React from 'react'
import { hero } from "../data/NavList";
import "../Sass/home.scss"
import logo from "../images/hero.png"
const Hero = () => {
  return (
    <div className="hero">
    <div className="background"></div>
    <div className="container">
      <div className="content">
        <div className="text">
          <h2>Medium 2 topping burger</h2>
          <h1>ARE YOU HUNGRY ?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae sed porro quia nesciunt quasi nobis eos, consectetur
            magnam harum eum.
          </p>
          <div className="button">
            <button>Learn More</button>
            <button>See our menu</button>
          </div>
        </div>
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <div className="details">
          {hero.map((item,index)=>(
            <div key={index} className="box">
              <div className="id">
                <h2 className="icon">{item.id}</h2>
              </div>
              <div className="title">
                <h3 className="title1">{item.title}</h3>
                <h3 className="desc">{item.desc}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
