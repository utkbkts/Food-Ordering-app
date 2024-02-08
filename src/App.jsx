import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";
import PageLayout from "./layoutpage/layout";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import useAuthStore from "./store/store";
import Sweets from "./pages/Sweets";
import Drinks from "./pages/Drinks";
import Pizza from "./pages/Pizza";
import Burger from "./pages/Burger";
import CartPage from "./pages/CartPage";
import FavoritePage from "./pages/FavoritePage";

const App = () => {
  const authUser = useAuthStore((state)=>state.user)
  return (
    <div className="scrollable-container">
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/sweets" element={<Sweets />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/" />} />
        </Routes>
        <Toaster />
      </PageLayout>
    </div>
  );
};

export default App;
