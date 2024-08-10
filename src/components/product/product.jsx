import { Link } from "react-router-dom";

const Product = ({
  handleDelete,
  id,
  images,
  title,
  description,
  price,
  loading = false,
}) => {
  return !loading ? (
    <div className="mx-4 sm:mx-0 flex flex-col rounded-[26px] overflow-hiddens shadow-lg w-full">
      <Link
        to={`/products/${id}`}
        className="w-full h-[300px] px-4 flex justify-center items-center overflow-hidden"
      >
        <img
          src={images[0]}
          alt={title}
          className="h-full object-contain duration-300 hover:scale-105"
        />
      </Link>
      <div className="px-4 py-2">
        <Link to={`/products/${id}`}>
          <h3 className="text-lg font-bold" title={title}>
            {title.slice(0, 20)} {title.length > 20 ? "..." : ""}
          </h3>
        </Link>
        <p className="text-sm text-gray-500">{description.slice(0, 70)} ...</p>
        <p className="text-lg font-bold">${price} USD</p>
      </div>
      <button
        onClick={() => handleDelete(id)}
        className="w-full bg-red-500 text-white font-bold py-2"
      >
        Удалить
      </button>
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
      <button
        onClick={() => handleDelete(id)}
        disabled={true}
        className="w-full bg-gray-500 text-white font-bold py-2 absolute bottom-0"
      >
        Удалить
      </button>
    </div>
  );
};

export default Product;
