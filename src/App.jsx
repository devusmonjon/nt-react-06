import { Theme } from "./components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Catalog from "./pages/catalog";
import Delivery from "./pages/delivery";
import Contacts from "./pages/contacts";

const App = () => {
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
        <Route
          path="*"
          element={
            <Theme
              children={
                <>
                  <div className="container">
                    <h1>404 | Not Found</h1>
                  </div>
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
