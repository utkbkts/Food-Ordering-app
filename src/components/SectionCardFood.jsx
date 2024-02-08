import Price from "format-price";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import useCartRating from "../hook/useCartRating";
import toast from "react-hot-toast";
import useAuthStore from "../store/store";
import Modal from "../utils/Modal";
import { useStore } from "../store/Cart";
import { CiHeart } from "react-icons/ci";

const SectionCardFood = ({
  cartId,
  image,
  price,
  title,
  description,
  rating,
}) => {
  const [hover, setHover] = useState(null);
  const { RatingCart } = useCartRating();
  const [confirmed, setConfirmed] = useState(false);
  const [modalActive, setmodalActive] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const { favoriteCart, cart, addToCart, removeFromCart } = useStore();

  const HandleConfirmed = (currentRating) => {
    if (!authUser) {
      setmodalActive(true);
      return;
    }
    const userConfirmed = window.confirm(
      `${currentRating} Are you sure you'll vote?`
    );
    if (userConfirmed && authUser) {
      RatingCart(currentRating, cartId);
      setConfirmed(true);
    } else {
      setConfirmed(false);
      toast.error("Your vote was not recorded");
    }
  };

  //!modal kapatma
  const closeModal = () => {
    setmodalActive(false);
  };
  // Rating'i hesapla
  const calculateAverageRating = () => {
    if (rating.length === 0) {
      return 0; // Eğer hiç oy verilmemişse ortalama 0 olacak
    }
    const totalRating = rating.reduce((acc, rating) => acc + rating, 0);
    return totalRating / rating.length; // Oy sayısına bölerek ortalama hesapla
  };

  const averageRating = calculateAverageRating();

  //!Addtocart

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      useStore.setState({ cart: JSON.parse(savedCart) });
    }

    const savedFavoriteData = localStorage.getItem("favoriteData");
    if (savedFavoriteData) {
      useStore.setState({ favoriteData: JSON.parse(savedFavoriteData) });
    }
  }, []);

  const HandleAddToCart = () => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [
        ...savedCart,
        { cartId, image, price, title, description, rating },
      ];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      addToCart({ cartId, image, price, title, description, rating });
      toast.success(`${title} product successfully added to cart`);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const HandleFavoriteCart = () => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("favoriteData")) || [];
      const updatedCart = [
        ...savedCart,
        { cartId, image, price, title, description, rating },
      ];
      localStorage.setItem("favoriteData", JSON.stringify(updatedCart));
      favoriteCart({ cartId, image, price, title, description, rating });
      toast.success(`${title} product has been added to favorite products`);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="wrapper-b">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="wrapper-c">
          <span className="title">{title.substring(0, 18)}</span>
          <div className="wrapper-d">
            <span className="number-rating">{averageRating.toFixed(1)}/10</span>{" "}
            {/* Ortalama rating */}
            <span className="radio-start">
              {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => {
                        HandleConfirmed(currentRating);
                      }}
                    />
                    <FaRegStar
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                      color={
                        currentRating <= (hover || rating)
                          ? confirmed
                            ? "green"
                            : "#ffc107"
                          : "#1c1c1d"
                      }
                      className="star"
                      size={20}
                    />
                  </label>
                );
              })}
            </span>
          </div>
        </div>
        <div className="wrapper-d">
          <span>{description.substring(0, 50)}</span>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <span className="price">{Price.format("en-US", "USD", price)}</span>
            <span onClick={HandleFavoriteCart}>
              <CiHeart size={30} style={{cursor:"pointer"}}/>
            </span>
          </div>
          <button onClick={HandleAddToCart}>Add To Cart</button>
        </div>
      </div>
      {modalActive && (
        <Modal description={"your vote is sign in"} onClick={closeModal} />
      )}
    </>
  );
};

export default SectionCardFood;
