import { Link } from "react-router-dom";
import useCartStore from "../hooks/useCart";
import { memo } from "react";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  //   const setCartItem = useCartStore((state) => state.setCartItem);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const updateCartItem = useCartStore((state) => state.updateCartItem);

  const handleIncrement = (product) => {
    updateCartItem({ ...product, count: product.count + 1 });
  };

  const handleDecrement = (product) => {
    updateCartItem({ ...product, count: product.count - 1 });
  };
  return (
    <div className="container">
      <div className="flex justify-between items-end mb-[30px]">
        <h1 className="text-[36px] font-bold ">Корзина</h1>
        <Link to="/" className="text-[#FF9900]">
          Добавить товар по артикулу
        </Link>
      </div>

      <div>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-[30px] last:border-none border-b pb-[30px]"
            >
              <div className="flex items-center max-w-[700px]">
                <img
                  className="w-[193px] h-[193px] object-contain p-[10px] mr-[30px]"
                  src={item.images[0]}
                  alt={item.title}
                />
                <div>
                  <h3 className="text-[18px] font-bold">{item.title}</h3>
                  <p className="text-[14px]">{item.description}</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <button
                  disabled={item?.count <= 1}
                  className="disabled:opacity-50 border-2 border-gray-500 text-gray-500 w-[20px] h-[20px] rounded-lg flex items-center justify-center"
                  onClick={() => handleDecrement(item)}
                >
                  <span className="font-bold">-</span>
                </button>
                <span
                  role="status"
                  tabIndex={0}
                  className="text-xl font-medium"
                >
                  {item?.count}
                </span>
                <button
                  disabled={item?.count >= item?.stock}
                  className="disabled:opacity-50 border-2 border-gray-500 text-gray-500 w-[20px] h-[20px] rounded-lg flex items-center justify-center"
                  onClick={() => handleIncrement(item)}
                >
                  <span className="font-bold">+</span>
                </button>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => removeCartItem(item.id)}
                  className="text-[14px] font-bold text-[#FF9900]"
                >
                  Удалить
                </button>

                <p className="text-[14px] font-bold ml-[20px] ">
                  ${item.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <>
            <p>Корзина пуста</p>
            <Link
              to="/"
              role="button"
              className="text-[14px] font-bold text-[#FF9900]"
            >
              Перейти в каталог
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Cart);
