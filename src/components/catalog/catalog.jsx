import { Link } from "react-router-dom";

const image1 = "/Rectangle 66.png";
const image2 = "/Rectangle 68.png";
const image3 = "/Rectangle 69.png";
const items = [
  {
    id: 1,
    url: image1,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 2,
    url: image2,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 3,
    url: image3,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 4,
    url: image3,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 5,
    url: image1,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 6,
    url: image2,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 7,
    url: image3,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
  {
    id: 8,
    url: image1,
    them: "Мебель",
    title: "Шкафы и шкафы-купе",
    desc: "Стеллажи и книжные шкафы",
    info: "Столы",
    collection: "Стулья",
    collection1: "Пледы",
    price: "Больше",
  },
];
const CatalogItem = () => {
  return (
    <>
      <p className="text-[36px] text font-[700] mb-11">Каталог</p>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12 items-center justify-center">
        {items?.map((el) => (
          <div key={el.id}>
            <div className="mb-[19px]">
              <img
                className=" duration-300 cursor-pointer "
                src={el.url}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[30px] pl-5">
              <h2 to={"/"} className="text-[18px] font-[700] whitespace-nowrap">
                {el.them}
              </h2>
              <Link to={"/"} className="duration-300 hover:text-[#FF9900]">
                {el.title}
              </Link>
              <Link
                to={"/"}
                className="whitespace-nowrap duration-300 hover:text-[#FF9900]"
              >
                {el.desc}
              </Link>
              <Link to={"/"} className="duration-300 hover:text-[#FF9900]">
                {el.info}
              </Link>
              <Link to={"/"} className="duration-300 hover:text-[#FF9900]">
                {el.collection}
              </Link>
              <Link to={"/"} className="duration-300 hover:text-[#FF9900]">
                {el.collection1}
              </Link>
              <Link to={"/"} className="duration-300 hover:text-[#FF9900]">
                {el.price}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CatalogItem;
