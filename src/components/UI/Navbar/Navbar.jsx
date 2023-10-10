import React from "react";
import { Link } from "react-router-dom";
import cl from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={cl.Navbar}>
      <ul className={cl.NavbarList}>
        <li>
          <Link to="/about" className={cl.NavbarLink}>
            Обо мне
          </Link>
        </li>
        <li>
          <Link to="/calc" className={cl.NavbarLink}>
            Калькулятор
          </Link>
        </li>
        <li>
          <Link to="/slider" className={cl.NavbarLink}>
            Слайдер
          </Link>
        </li>
        <li>
          <Link to="/cart" className={cl.NavbarLink}>
            Корзина
          </Link>
        </li>
        <li>
          <Link to="/test" className={cl.NavbarLink}>
            Тест
          </Link>
        </li>
        <li>
          <Link to="/calendar" className={cl.NavbarLink}>
            Календарь
          </Link>
        </li>
        <li>
          <Link to="/carous" className={cl.NavbarLink}>
            Карусель
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
