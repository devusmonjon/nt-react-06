import { memo } from "react";

const Contacts = () => {
  return (
    <div className="container">
      <p className="text-[36px] text font-[700] mb-11">Контакты</p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start ">
        <div className="">
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start">
            <div>
              <p>+ 375 434 847 28 84</p>
              <p>+ 375 448 473 09 48</p>
              <p>ikeaekspress@gmail.com</p>
            </div>
            <div>
              <p>г.Минск</p>
              <p>Ул. Первомайская</p>
              <p>Д. 1, Кв. 43</p>
            </div>
            <div className="w-[250px]">
              <p>ОГРН: 3748 49384 4847 30948</p>
              <p>ООО “Икеа”</p>
              <p>Политика конфиденциальности</p>
            </div>
          </div>
        </div>
        <div className=" lg:mt-[-120px] lg:w-[450px] sm:mt-[0]">
          <img className="" src="/ool.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default memo(Contacts);
