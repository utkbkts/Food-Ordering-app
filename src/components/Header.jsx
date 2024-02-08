import { navList } from "../data/NavList";
import { Link, useNavigate } from "react-router-dom";
import "../Sass/header.scss";
import Headerprofile from "./Headerprofile";
import { Badge } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import useAuthStore from "../store/store";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import Search from "antd/es/input/Search";
import useSearchQuery from "../hook/useSearchQuery";
import { useStore } from "../store/Cart";

const Header = () => {
  const authUser = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const cartBasket = useStore((state)=>state.cart);
  const FavoriteBasket = useStore((state)=>state.favoriteData);
  const navigate = useNavigate();
  const{handleChange,search}=useSearchQuery()
  const handlesignout = async () => {
    try {
      await signOut(auth);
      logout();
      toast.success("Successfully logout");
    } catch (error) {
      console.error("Error during sign-out:", error.message);
    }
  };
  //search--
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search?=q&searchQuery=${search}`);
    } else {
      navigate("/");
    }
  };
  return (
    <header className="header">
      <div className="container">
        <Link to={"/"} className="logo">
          <h1>I'M HUNGRY</h1>
        </Link>
        <div className="nav">
          <ul>
            {navList.map((item, index) => (
              <li key={index} className="">
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <form  onSubmit={handleSubmit} className="search">
          <Search
            placeholder="Search title,category"
            allowClear
            value={search}
            onChange={handleChange}
            style={{
              width: 200,
            }}
          />
        </form>
        <div className="badge">
          <Link to={"/favorite"}>
            <Badge count={FavoriteBasket.length}>
              <HeartOutlined />
            </Badge>
          </Link>
          <Link to={"/cart"}>
            <Badge count={cartBasket.length}>
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </div>
        {authUser ? (
          <div className="wrapper-header">
            <span>Hi,{authUser?.Name}</span>
            <button onClick={handlesignout}>Sign Out</button>
          </div>
        ) : (
          <div className="wrapper-header1">
            <Link to={"/login"}>Sign In</Link>
            <Link to={"/signup"}>Sign up</Link>
          </div>
        )}
        <div>
          <Headerprofile />
        </div>
      </div>
    </header>
  );
};

export default Header;
