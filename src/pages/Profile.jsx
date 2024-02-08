import React, { useState } from "react";
import "../Sass/profile.scss";
import ProfilePage from "../components/ProfilePage";
import AddedProduct from "../components/AddedProduct";
import CreateForm from "./CreateForm";
import UsersPage from "../components/UsersPage";
const Profile = () => {
  const [dataActive, setDataActive] = useState("profile");
 
  return (
    <div className="Profile">
      <div className="profile__a">
        <div className="profile__b">
          <button
            className={`${dataActive === "profile" ? "active" : ""}`}
            onClick={() => setDataActive("profile")}
          >
            Profile
          </button>
          <button
            className={`${dataActive === "addedproduct" ? "active" : ""}`}
            onClick={() => setDataActive("addedproduct")}
          >
            Added products
          </button>
          <button
            className={`${dataActive === "createproduct" ? "active" : ""}`}
            onClick={() => setDataActive("createproduct")}
          >
            Create Product
          </button>
          <button
            className={`${dataActive === "users" ? "active" : ""}`}
            onClick={() => setDataActive("users")}
          >
            Users
          </button>
          <button
            className={`${dataActive === "orders" ? "active" : ""}`}
            onClick={() => setDataActive("orders")}
          >
            Orders
          </button>
        </div>
        {dataActive === "profile" && <ProfilePage/> }
        {dataActive === "addedproduct" && <AddedProduct/> }
        {dataActive === "createproduct" && <CreateForm/> }
        {dataActive === "users" && <UsersPage/> }
      </div>
    </div>
  );
};

export default Profile;
