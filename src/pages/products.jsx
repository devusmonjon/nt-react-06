import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useCartStore from "../hooks/useCart";
import { Product } from "../components";

const Products = () => {
  const [product, setProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [category, setCategory] = useState("");
  const [moreLikeThis, setMoreLikeThis] = useState(null);
  const { id } = useParams();

  const cart = useCartStore((state) => state.cart);
  const setCartItem = useCartStore((state) => state.setCartItem);
  const removeCartItem = useCartStore((state) => state.removeCartItem);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct({ ...data, count: 1 });
        setImageUrl(data.images[0]);
        setCategory(data.category);
      });
    return () => {
      setProduct(null);
      setImageUrl(null);
      setAddedToCart(false);
    };
  }, []);
  useEffect(() => {
    fetch(
      `https://dummyjson.com/products/${
        category !== "" ? `category/${category}` : ""
      }?limit=4`
    )
      .then((res) => res.json())
      .then((data) => setMoreLikeThis(data.products));
  }, [category]);
  console.log(moreLikeThis);

  useEffect(() => {
    cart.forEach((item) => {
      if (item.id === product?.id) setAddedToCart(true);
    });
  }, [product, cart]);

  const handleImageChange = (image) => {
    setImageUrl(image);
  };

  const handleAddToCart = () => {
    setCartItem(product);
    setProduct((prev) => ({ ...prev, count: 1 }));
  };

  const handleRemoveFromCart = (id) => {
    removeCartItem(id);
    setAddedToCart(false);
  };

  const handleIncrement = () => {
    setProduct((prev) =>
      prev.stock > prev.count ? { ...prev, count: prev.count + 1 } : prev
    );
  };

  const handleDecrement = () => {
    setProduct((prev) =>
      prev.count > 1 ? { ...prev, count: prev.count - 1 } : prev
    );
  };
  console.log(product?.category);

  return (
    <div>
      <div className="container">
        <Link
          to="/"
          className="sm:w-max w-[90%] my-4 text-xl bg-[#FF9900] px-5 py-2.5 flex justify-center items-center rounded-lg text-white border-[#FF9900] border-2 duration-300 hover:bg-white hover:text-[#FF9900] outline-none active:bg-[#FF9900] focus:ring-2 ring-[#FF9900] ring-offset-2"
        >
          Назад
        </Link>
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <div>
            <div className="w-[403px] h-[400px] p-10 grid place-items-center border-2 border-[#FF9900]">
              <img src={imageUrl} alt="" className="object-contain h-[320px]" />
            </div>
            <div className="flex w-[403px] gap-[1px] overflow-x-auto scrollbar-hide py-2">
              {product?.images.map((image) => (
                <div
                  key={image}
                  onClick={() => handleImageChange(image)}
                  className="min-w-[100px] h-[100px] max-w-[100px] max-h-[100px] border-2 border-[#FF9900] duration-300 hover:scale-110 cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={image}
                    alt={product.title}
                    className="object-contain h-[100px]"
                    key={image}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl font-bold">{product?.title}</h1>
            <p className="md:text-xl text-lg font-normal py-10">
              {product?.description}
            </p>
            <div className="flex flex-row items-center w-[322.69px] justify-between">
              <p className="md:text-2xl text-xl font-medium">
                ${product?.price}
              </p>
              <div className="flex flex-row items-center gap-4">
                <button
                  disabled={product?.count <= 1}
                  className="disabled:opacity-50 border-2 border-gray-500 text-gray-500 w-[20px] h-[20px] rounded-lg flex items-center justify-center"
                  onClick={handleDecrement}
                >
                  <span className="font-bold">-</span>
                </button>
                <span
                  role="status"
                  tabIndex={0}
                  className="text-xl font-medium"
                >
                  {product?.count}
                </span>
                <button
                  disabled={product?.count >= product?.stock}
                  className="disabled:opacity-50 border-2 border-gray-500 text-gray-500 w-[20px] h-[20px] rounded-lg flex items-center justify-center"
                  onClick={handleIncrement}
                >
                  <span className="font-bold">+</span>
                </button>
              </div>
            </div>
            <button
              role="button"
              className="bg-[#FF9900] text-white font-bold p-[10px_80px] rounded-[36px] my-10 border-[#FF8A1E] border-2 duration-300 hover:bg-white hover:text-[#FF8A1E] outline-none active:bg-[#FF8A1E] focus:ring-2 ring-[#FF8A1E] ring-offset-2"
              onClick={() => {
                addedToCart
                  ? handleRemoveFromCart(product?.id)
                  : handleAddToCart();
              }}
            >
              {addedToCart ? "Удалить из корзины" : "Добавить в корзину"}
            </button>
          </div>
        </div>

        <div className="my-10 px-4">
          <h2 className="text-3xl font-bold mb-5">
            С этим товаром также заказывают
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {moreLikeThis?.map((product) => (
              <Product key={product?.id} product={product} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
