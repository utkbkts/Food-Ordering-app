import React from "react";
import useGetCart from "../hook/useGetCart";
import SectionCardFood from "../components/SectionCardFood";
import "../Sass/sectionfood.scss";
const Pizza = () => {
  const { Getblog } = useGetCart();

  const filtered = Getblog.filter(
    (item) => item.selectedCategoryType === "pizza"
  );
  return (
    <div className="section">
      <div className="wrapper">
        <div className="wrapper-category">
          {filtered.map((item) => (
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

export default Pizza;
