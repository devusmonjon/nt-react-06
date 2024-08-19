import { memo, useEffect, useState } from "react";
import Product from "../product/product";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const [limit, setLimit] = useState(8);
  const [maxLimit, setMaxLimit] = useState(0);
  const [category, setCategory] = useState("");
  const [scroll, setScroll] = useState(0);
  const [cLoading, setLoading] = useState(true);

  const { data: products, loading } = useFetch(
    `https://dummyjson.com/products/${category ? `category/${category}` : ""}`,
    { limit },
    [limit, category]
  );
  const { data: categories } = useFetch("/products/category-list", {}, []);
  useEffect(() => {
    setLoading(false);
    setMaxLimit(products?.total || 0);
  }, [products]);

  useEffect(() => {}, []);
  const handleLoadMore = () => {
    setLoading(true);
    setLimit((prev) => (prev < maxLimit ? prev + 4 : prev));
  };

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));
  }, []);
  // when the user scrolls down auto load more when hit the bottom
  useEffect(() => {
    if (scroll + window.innerHeight >= document.body.scrollHeight) {
      handleLoadMore();
    }
  }, [scroll]);

  const handleIncrement = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };
  const handleDecrement = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, count: product.count > 1 ? product.count - 1 : 1 }
          : product
      )
    );
  };

  const handleReset = () => {
    setProducts((prev) => prev.map((product) => ({ ...product, count: 1 })));
  };
  return (
    <section className="mt-[38px] pb-[100px]">
      <div className="container">
        <ul className="flex gap-4 text-[18px] overflow-x-auto scrollbar-hide py-4 px-4 scroll-snap">
          <li>
            <button
              className={`${
                category === "" ? "bg-[#FF9900] text-white" : "text-[#FF9900]"
              } whitespace-nowrap py-1 px-4 rounded-[26px] border-[#FF9900] border-2 duration-300 hover:bg-white hover:text-[#FF9900] outline-none active:bg-[#FF9900] focus:ring-2 ring-[#FF9900] ring-offset-2 active:text-white`}
              onClick={() => {
                setCategory("");
              }}
            >
              All
            </button>
          </li>
          {categories?.map((cat) => (
            <li key={cat}>
              <button
                className={`${
                  category === cat
                    ? "bg-[#FF9900] text-white"
                    : "text-[#FF9900]"
                } whitespace-nowrap py-1 px-4 rounded-[26px]  border-[#FF9900] border-2 duration-300 hover:bg-[#FF9900] hover:text-white outline-none active:bg-[#FF9900] focus:ring-2 ring-[#FF9900] ring-offset-2`}
                onClick={() => {
                  setCategory(cat);
                }}
              >
                {cat.split("-").join(" ")}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
          {products?.products?.length > 0
            ? products?.products?.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  {...product}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  handleReset={handleReset}
                />
              ))
            : [0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => (
                <Product loading={true} key={i} />
              ))}
        </div>
        <button
          disabled={maxLimit <= limit || cLoading}
          className="w-full bg-green-500 text-white font-bold py-2 mt-16 disabled:bg-gray-300 duration-300"
          onClick={() => {
            handleLoadMore();
          }}
        >
          {maxLimit > limit
            ? cLoading
              ? "Загрузка..."
              : `Загрузить еще (${maxLimit - limit})`
            : "Загружено"}
        </button>
      </div>
    </section>
  );
};

export default memo(Products);
