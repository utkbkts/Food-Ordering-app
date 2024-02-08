import React from "react";
import {useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PageLayout = ({ children }) => {
  const {pathname} = useLocation();
  return (
    <div style={{flexDirection:"column",display:"flex",minHeight:"100vh"}}>
      {pathname !== "/login"&& pathname !== "/signup"? (
        <>
           <Header/>
        </>
      ) : null}
      <div style={{flex:"grow",minHeight:"100vh"}}>
        {children}
      </div>
      {pathname !== "/login"&& pathname !== "/signup"? (
        <>
           <Footer/>
        </>
      ) : null}
    </div>
  );
};

export default PageLayout;