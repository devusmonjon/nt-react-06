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
      <p className="text-[36px] text font-[700] mb-11 px-20">Каталог</p>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 px-20 md:grid-cols-3 lg:grid-cols-4 mb-12 items-center justify-center ">
        {items?.map((el) => (
          <div key={el.id}>
            <div className="mb-[19px]">
              <img
                className=" duration-300 cursor-pointer "
                src={el.url}
                alt=""
              />
            </div>
            <div className="max-w-[250px] flex flex-col gap-[30px] pl-5">
              <Link to={"/"} className="text-[18px] font-[700]">
                {el.them}
              </Link>
              <Link to={"/"}>{el.title}</Link>
              <Link to={"/"} className="max-w-[200px]">
                {el.desc}
              </Link>
              <Link to={"/"}>{el.info}</Link>
              <Link to={"/"}>{el.collection}</Link>
              <Link to={"/"}>{el.collection1}</Link>
              <Link to={"/"}>{el.price}</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CatalogItem;
