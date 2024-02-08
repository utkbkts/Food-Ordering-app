import React from "react";
import "../Sass/footer.scss";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer__a">
        <div className="footer__b">
          <span>SUBSCRIBE NEWSLETTER</span>
        </div>
        <div className="footer__c">
          <input
            type="email"
            placeholder="Enter your email..."
            name="email"
            id=""
          />
          <button>Subscribe Now</button>
        </div>
      </div>
      <div className="footer-links">
        <div className="__a">
          <span>ABOUT HUNGRY</span>
          <span>
            Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore
          </span>
        </div>
        <div className="__b">
          <span className="title">CONTACT US</span>
          <div className="items">
            <h4>
              <span>ADDRESS:</span> 8638 Amarica Stranfod Mailbon Star,
              California, TX 70240 MAIL support@example.com PHONE +7464 0187
              3535 645 FAX ID +9 659459 49594
            </h4>
            <h4>
              <span>MAIL:</span> support@example.com
            </h4>
            <h4>
              <span>PHONE:</span> +7464 0187 3535 645
            </h4>
            <h4>
              <span>FAX ID:</span> +9 659459 49594
            </h4>
          </div>
        </div>
        <div className="__c">
          <span className="title">Links</span>
          <span>HOME</span>
          <span>About</span>
          <span>Pages</span>
          <span>Shop</span>
        </div>
        <div className="__d">
          <span className="title">RECENT Product</span>
          <div className="recent">
            <img src="/src/images/blog/b1.jpg" alt="" />
            <div className="best">
              <span className="titles">BEST BURGER IN YOUR SOCI...</span>
              <span className="desc">JAN 15, 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="example">
        <h1>Copy Right © Example 2024.Design By UTKUBEKTASOGLU</h1>
      </div>
    </div>
  );
};

export default Footer;
