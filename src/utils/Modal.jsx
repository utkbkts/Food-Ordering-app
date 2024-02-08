import React, { useEffect } from "react";
import "../Sass/modal.scss";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Modal = ({ description, onClick }) => {
    useEffect(() => {
        const body = document.body;
        if (body) {
          body.classList.toggle("no-scroll", true);
        }
    
        return () => {
          if (body) {
            body.classList.toggle("no-scroll", false);
          }
        };
      }, []);
  return (
    <div className="Modal">
      <div className="modal-a">
        <div className="wrapper">
          <div className="icon">
            <CloseOutlined onClick={onClick} />
          </div>
          <div className="wrap">
            <div className="title">
              <h1>Oppsss !!</h1>
            </div>
            <div className="desc">
              <p>{description}</p>
            </div>
            <div className="button">
              <Link to={"/login"} className="btn">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
