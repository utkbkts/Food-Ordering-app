import "../Sass/cartpage.scss";
import Price from "format-price";
import { useStore } from "../store/Cart";
import { GoTrash } from "react-icons/go";
import toast from "react-hot-toast";

const CartPage = () => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useStore();
  const Cart = useStore((state) => state.cart);
  // Total hesaplama
  const calculateTotal = (cart) => {
    let totalPrice = 0;

    // Sepetteki her ürün için fiyatı ve miktarı çarpıp toplam fiyata ekleyin
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });

    // Toplam tutarı döndürün
    return totalPrice;
  };

  // Kargo hesaplama
  const calculateCargo = (cart) => {
    let courierfree = 0;

    // Sepetteki her ürünün fiyatını ve miktarını kullanarak kurye ücretini hesaplayın
    cart.forEach((item) => {
      courierfree += item.price * item.quantity * 0.15; // Toplam tutarın %15'i kurye ücreti olarak eklenir
    });

    return courierfree;
  };

  const totalItemsInCart = calculateTotal(Cart);
  const totalCargoCart = calculateCargo(Cart);

  //!azaltmak
  const decrementQuantityCart = (cartId) => {
    const item = Cart.find((item) => item.cartId === cartId);
    if (item.quantity > 1) {
      toast.success("Ürün başarıyla azaltıldı");
      decrementQuantity(cartId);
    } else {
      toast.error("En az bir ürün kalmalıdır");
    }
  };

  return (
    <div className="CartPage">
      <div className="cart__wrap_a">
        <div className="cart__wrapper">
          {Cart.length <= 0 ? (
            <h1>Your cart is empty, let's do some shopping.</h1>
          ) : (
            Cart.map((item) => (
              <>
                <div key={item.cartId} className="header"></div>
                <div className="header-wrapper">
                  <div className="__a">
                    <div className="__b">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="__c">
                      <span>{item.title}</span>
                      <span>Estimated shipping time 2 days</span>
                    </div>
                  </div>
                  <div className="__d">
                    <div className="button">
                      <button
                        onClick={() => decrementQuantityCart(item.cartId)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item.cartId)}>
                        +
                      </button>
                    </div>
                    <div className="price">
                      <span>{Price.format("en-US", "USD", item.price)}</span>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="trash"
                    >
                      <GoTrash size={15} />
                    </button>
                  </div>
                </div>
              </>
            ))
          )}
        </div>
        <div className="cart__wrap__b">
          <div className="__wrapa">
            <h1>Sipariş özeti</h1>
          </div>
          <div className="__productp">
            <span>Product Total</span>
            <span>{Price.format("en-US", "USD", totalItemsInCart)}</span>
          </div>
          <div className="__productp">
            <span>Courier total</span>
            <span>{Price.format("en-US", "USD", totalCargoCart)}</span>
          </div>
          <hr />
          <div className="__productp">
            <span>Total</span>
            <span className="prices">
              {Price.format("en-US", "USD", totalItemsInCart + totalCargoCart)}
            </span>
          </div>
          <div className="buttons">
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
