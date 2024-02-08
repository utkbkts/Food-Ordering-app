import { useState } from "react";
import "../Sass/sectionfood.scss";
import useGetCart from "../hook/useGetCart";
import SectionCardFood from "./SectionCardFood";

const Sectionfood = () => {
  const { Getblog } = useGetCart();
  const [selectedcategory, setselectedcategory] = useState("");

  const filterdata = selectedcategory
    ? Getblog.filter((item) => item.category === selectedcategory)
    : Getblog;
  return (
    <div className="section">
      <div className="row">
        <span>Popular dishes</span>
        <span>POPULAR DISHES</span>
      </div>
      <div className="wrapper">
        <div className="wrapper-a">
          <button
            className={`${selectedcategory === "" ? "active" : ""}`}
            onClick={() => setselectedcategory("")}
          >
            ALL
          </button>
          {Getblog.map((item) => (
            <button
              className={`${
                selectedcategory === item.category ? "active" : ""
              }`}
              key={item.id}
              onClick={() => setselectedcategory(item.category)}
            >
              {item.category}
            </button>
          ))}
        </div>
        <div className="wrapper-category">
          {filterdata.map((item) => (
            <SectionCardFood
              key={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              description={item.description}
              rating={item.rating}
              cartId={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sectionfood;
