import create from "zustand";

//cart
const storedCart = localStorage.getItem("cart");
const initialCart = storedCart ? JSON.parse(storedCart) : [];

//favorite
const storedCartfavorite = localStorage.getItem("favoriteData");
const initialCartfavorite = storedCartfavorite ? JSON.parse(storedCartfavorite) : [];
export const useStore = create((set) => ({
  cart:initialCart ,
  favoriteData: initialCartfavorite,
  addToCart: (product) =>
  set((state) => {
    const existingProductIndex = state.cart.findIndex(item => item.cartId === product.cartId);
    if (existingProductIndex !== -1) {
      const updatedCart = [...state.cart];
      updatedCart[existingProductIndex].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    } else {
      const updatedCart = [...state.cart, { ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }
  }),
  favoriteCart: (product) =>
    set((state) => {
      const existingFavoriteData = state.favoriteData.findIndex(item=>item.cartId === product.cartId);
      if(existingFavoriteData !== -1){
        const updatedFavorite = [...state.favoriteData];
        updatedFavorite[existingFavoriteData].quantity += 1;
        localStorage.setItem('favoriteData', JSON.stringify(updatedFavorite));
        return { favoriteData: updatedFavorite };
      }else{
        const updatedFavoriteData = [...state.favoriteData,{...product,quantity:1}];
        localStorage.setItem('favoriteData', JSON.stringify(updatedFavoriteData));
        return { favoriteData: updatedFavoriteData };
      }
      
    }),
    incrementQuantity: (cartId) =>
    set((state) => {
      const updatedCart = state.cart.map(item =>
        item.cartId === cartId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  decrementQuantity: (cartId) =>
    set((state) => {
      const updatedCart = state.cart.map(item =>
        item.cartId === cartId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
  removeFromCart: (cartId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.cartId !== cartId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
    removeFromFavorite: (cartId) =>
    set((state) => {
      const updatedFavorite = state.favoriteData.filter((item) => item.cartId !== cartId);
      localStorage.setItem('favoriteData', JSON.stringify(updatedFavorite));
      return { favoriteData: updatedFavorite };
    }),
}));
