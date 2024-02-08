import React from "react";
import useSearchQuery from "../hook/useSearchQuery";
import SectionCardFood from "../components/SectionCardFood";
import "../Sass/sectionfood.scss";
const Search = () => {
  const { GetSearch } = useSearchQuery();
  //aranan kelimeyi ayır
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("searchQuery");
  return (
    <div className="section">
      <div className="wrapper">
          <h1>
            Search Result: <span>{searchQuery}</span>
          </h1>
        <div className="wrapper-category">
          {GetSearch.length > 0 ? (
            GetSearch.map((item) => (
              <SectionCardFood
                key={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                description={item.description}
                rating={item.rating}
                cartId={item.id}
              />
            ))
          ) : (
            <div className="not-found">
              <h1>Searched results not found:{searchQuery}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
