import React, { useRef, useState, useEffect } from "react";
import "../Sass/createform.scss";
import usePreviewImage from "../hook/usePreviewImage";
import { BsFillImageFill } from "react-icons/bs";
import useCartCreate from "../hook/useCartCreate";
import { Drinks, Foods, Pizza, Sweets } from "../libs/data";

const CreateForm = () => {
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [selectedCategoryType, setSelectedCategoryType] = useState("");
  const { selectedFile, setSelectedFile, handleImageChange } =
    usePreviewImage();
  const imageref = useRef(null);
  const { CreateFormData, isLoading } = useCartCreate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      image: selectedFile,
      title,
      description,
      category,
      price,
      selectedCategoryType,
    };

    try {
      const database = await CreateFormData(data);

      if (database) {
        setimage("");
        settitle("");
        setdescription("");
        setcategory("");
        setprice("");
        setSelectedFile("");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

 

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="wrapper">
        <div className="image">
          <input
            ref={imageref}
            value={image}
            hidden
            onChange={handleImageChange}
            type="file"
            name="image"
          />
          {!selectedFile && (
            <BsFillImageFill
              onClick={() => imageref.current.click()}
              size={16}
            />
          )}
          {selectedFile && (
            <>
              <img src={selectedFile} alt="image" />
              <button className="close" onClick={() => setSelectedFile("")}>
                X
              </button>
            </>
          )}
        </div>
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          placeholder="title"
          type="text"
          name="title"
        />
        <input
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          placeholder="description"
          type="text"
          name="description"
        />
        <div className="category">
          <label htmlFor="">
            <input
              type="radio"
              name="categoryType"
              value="drinks"
              onChange={(e) => setSelectedCategoryType(e.target.value)}
            />
            Drinks
          </label>
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="categoryType"
              value="burger"
              onChange={(e) => setSelectedCategoryType(e.target.value)}
            />
            Burger
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="categoryType"
              value="sweets"
              onChange={(e) => setSelectedCategoryType(e.target.value)}
            />
            Sweets
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="categoryType"
              value="pizza"
              onChange={(e) => setSelectedCategoryType(e.target.value)}
            />
            Pizza
          </label>
        </div>
        <select
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          name="category"
        >
          <option value="1">
            Select an category
          </option>

          {selectedCategoryType === "drinks" &&
            Drinks.map((drink) => (
              <option key={drink.id} value={drink.title}>
                {drink.title}
              </option>
            ))}
          {selectedCategoryType === "burger" &&
            Foods.map((food) => (
              <option key={food.id} value={food.title}>
                {food.title}
              </option>
            ))}
          {selectedCategoryType === "sweets" &&
            Sweets.map((food) => (
              <option key={food.id} value={food.title}>
                {food.title}
              </option>
            ))}
          {selectedCategoryType === "pizza" &&
            Pizza.map((food) => (
              <option key={food.id} value={food.title}>
                {food.title}
              </option>
            ))}
        </select>
        <input
          value={price}
          onChange={(e) => setprice(e.target.value)}
          type="number"
          placeholder="price"
          name="price"
          id=""
        />
        <button type="submit">
          {isLoading ? "Loading..." : "Create Form"}
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
