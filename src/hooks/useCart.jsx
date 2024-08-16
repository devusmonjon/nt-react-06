import { create } from "zustand";

const useCartStore = create((cart) => ({
  cart: [],
  setCartItems: (cartItems) => cart((state) => ({ cart: cartItems })),
  setCartItem: (item) =>
    cart((state) => {
      if (state.cart.find((cartItem) => cartItem.id === item.id)) {
        return { cart: state.cart };
      } else {
        localStorage.setItem("cart", JSON.stringify([...state.cart, item]));
        return { cart: [...state.cart, item] };
      }
    }),
  updateCartItem: (item) =>
    cart((state) => {
      const index = state.cart.findIndex((cartItem) => cartItem.id === item.id);
      state.cart[index] = item;
      const localStroageItems = localStorage.getItem("cart");
      const items = JSON.parse(localStroageItems);
      items[index] = item;
      localStorage.setItem("cart", JSON.stringify(items));
      return { cart: [...state.cart] };
    }),
  removeCartItem: (id) =>
    cart((state) => {
      localStorage.setItem(
        "cart",
        JSON.stringify(state.cart.filter((item) => item.id !== id))
      );
      return { cart: state.cart.filter((item) => item.id !== id) };
    }),
  clearCart: () => cart((state) => ({ cart: [] })),
}));

export default useCartStore;
