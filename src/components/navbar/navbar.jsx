import { NavLink } from "react-router-dom";
import Logo from "../logo/logo";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  const { t } = useTranslation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <nav
        className={`py-[33px] bg-[#F8F8F8] sticky top-0 duration-300 ${
          scrollY > 0 ? "shadow-md backdrop-blur-2xl bg-transparent" : ""
        }`}
      >
        <div className="container hiddden md:flex items-center justify-between">
          <NavLink to="/">
            <Logo large={false} />
          </NavLink>
          <ul className="flex items-center gap-4">
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) => (isActive ? "text-[#FF9900]" : "")}
              >
                {t("catalog")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/delivery"
                className={({ isActive }) => (isActive ? "text-[#FF9900]" : "")}
              >
                {t("delivery")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms"
                className={({ isActive }) => (isActive ? "text-[#FF9900]" : "")}
              >
                {t("terms")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={({ isActive }) => (isActive ? "text-[#FF9900]" : "")}
              >
                {t("contacts")}
              </NavLink>
            </li>
          </ul>
          <ul className="hidden sm:flex items-center gap-4">
            <li>
              <NavLink to="tel:+3757364636472">+ 375 736 463 64 72</NavLink>
            </li>
            <li>
              <NavLink to="tel:+3757364636472">+ 375 736 463 64 72</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <header>
        <div className="container"></div>
      </header>
    </Fragment>
  );
};

export default Navbar;
