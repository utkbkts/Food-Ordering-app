import React, { useState } from "react";
import "../Sass/headerprofile.scss";
import useAuthStore from "../store/store";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import toast from "react-hot-toast";
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { navList } from "../data/NavList";
import { Link } from "react-router-dom";
import logo from "../images/user.png";
import { useStore } from "../store/Cart";
const Headerprofile = () => {
  const authUser = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [active, setactive] = useState(false);
  const cartBasket = useStore((state)=>state.cart);
  const FavoriteBasket = useStore((state)=>state.favoriteData);
  const handlesignout = async () => {
    try {
      await signOut(auth);
      logout();
      toast.success("Successfully logout");
    } catch (error) {
      console.error("Error during sign-out:", error.message);
    }
  };
  return (
    <div className="header-profile">
      <div className="wrappers" onClick={() => setactive(!active)}>
        <img src={logo || authUser?.profilePicURL} alt="" />
      </div>
      <div className={`back-wrapper ${active ? "active" : ""}`}>
        <div className="wrappers">
          <span>Hi,{authUser?.Name}</span>
          <div className="search1">
            <Link to={"/favorite"} className="icon">
              <CiHeart size={25} />
              <span className="icon1">{FavoriteBasket.length}</span>
            </Link>
            <Link to={"/cart"} className="icon">
              <CiShoppingBasket size={27} />
              <span className="icon1">{cartBasket.length}</span>
            </Link>
          </div>
          <ul>
            {navList.map((item, index) => (
              <li key={index} className="">
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
          {authUser && <button onClick={handlesignout}>Sign Out</button>}
        </div>
      </div>
    </div>
  );
};

export default Headerprofile;
