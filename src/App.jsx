import { Theme } from "./components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Catalog from "./pages/catalog";
import Delivery from "./pages/delivery";
import Contacts from "./pages/contacts";
import NotFound from "./pages/NotFound";
import Cart from "./pages/cart";
import { useEffect } from "react";
import useCartStore from "./hooks/useCart";
import Admin from "./pages/dashboard/admin";
import Dashboard from "./pages/dashboard/dashboard";
import User from "./pages/dashboard/user";
import Login from "./pages/login";
import Auth from "./pages/auth";

const App = () => {
  const setCartItems = useCartStore((state) => state.setCartItems);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCartItems(JSON.parse(localStorage.getItem("cart")));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Theme children={<Home />} />} />
        <Route
          path="/products/:id"
          element={<Theme children={<Products />} />}
        />
        <Route path="/catalog" element={<Theme children={<Catalog />} />} />
        <Route path="/delivery" element={<Theme children={<Delivery />} />} />
        <Route path="/contacts" element={<Theme children={<Contacts />} />} />
        <Route path="/cart" element={<Theme children={<Cart />} />} />
        <Route path="/login" element={<Theme children={<Login />} />} />
        <Route path="/" element={<Theme children={<Auth />} />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="admin" element={<Admin />} />
            <Route path="user" element={<User />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Theme
              children={
                <>
                  <NotFound />
                </>
              }
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
