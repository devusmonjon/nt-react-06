import { Link } from "react-router-dom";
import useCartStore from "../../hooks/useCart";
import CartIcon from "../cart-icon/cart-icon";
import "./product.css";
import { memo } from "react";

const Product = ({
  id,
  product,
  images,
  title,
  description,
  price,
  count,
  stock,
  handleIncrement,
  handleDecrement,
  handleReset,
  loading = false,
}) => {
  const cart = useCartStore((state) => state.cart);
  const setCartItem = useCartStore((state) => state.setCartItem);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  return !loading ? (
    <div className="mx-4 sm:mx-0 flex flex-col rounded-[26px] overflow-hiddens shadow-lg sm:w-full w-[90%] overflow-hidden card-item">
      <Link
        to={`/products/${id}`}
        className="w-full h-[300px] px-4 flex justify-center items-center overflow-hidden rounded-[26px]"
      >
        <img
          src={images[0]}
          alt={title}
          className="h-full object-contain duration-300 hover:scale-105 "
        />
      </Link>
      <div className="px-4 py-2 translate-y-[50px] card-desc duration-300">
        <Link to={`/products/${id}`}>
          <h3 className="text-lg font-bold" title={title}>
            {title.slice(0, 20)} {title.length > 20 ? "..." : ""}
          </h3>
        </Link>
        <p className="text-sm text-gray-500">{description.slice(0, 70)} ...</p>
        <p className="text-lg font-bold">${price} USD</p>
      </div>
      <div className="py-2 px-4 flex items-center justify-between translate-y-[50px] card-buttons duration-300">
        <div className="flex flex-row items-center gap-4">
          <button
            disabled={count <= 1}
            className="disabled:opacity-50 border-2 border-gray-500 text-gray-500 w-[20px] h-[20px] rounded-lg flex items-center justify-center"
            onClick={() => handleDecrement(id)}
          >
            <span className="font-bold">-</span>
          </button>
          <span role="status" tabIndex={0} className="text-xl font-medium">
            {count}
          </span>
          <button
            disabled={count >= stock}
            className="disabled:opacity-50 border-2 border-gray-500 text-gray-500 w-[20px] h-[20px] rounded-lg flex items-center justify-center"
            onClick={() => handleIncrement(id)}
          >
            <span className="font-bold">+</span>
          </button>
        </div>
        <button title="Add to cart" onClick={() => setCartItem(product)}>
          <CartIcon />
        </button>
      </div>
    </div>
  ) : (
    <div className="mx-4 sm:mx-0 flex flex-col rounded-[26px] overflow-hiddens shadow-lg w-full h-[452px] relative">
      <Link
        to={`/products/1`}
        className="w-full h-[300px] px-4 flex justify-center items-center overflow-hidden bg-[#ddd]"
      ></Link>
      <div className="px-4 py-2">
        <Link to={`/products/1`}>
          <h3 className="text-lg font-bold w-full h-4 bg-[#ddd]"></h3>
        </Link>
        <p className="text-sm text-gray-500 w-[90%] h-8 bg-[#ddd] my-4"></p>
        <p className="text-lg font-bold w-[50%] h-4 bg-[#ddd]"></p>
      </div>
    </div>
  );
};

export default memo(Product);
