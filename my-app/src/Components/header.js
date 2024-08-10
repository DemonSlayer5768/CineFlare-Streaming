import React from "react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { CiBoxList, CiSearch } from "react-icons/ci";
import { TbCategoryFilled } from "react-icons/tb";
import { RiMovie2Line } from "react-icons/ri";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      {/* Elementos centrados */}
      <nav className="nav_center">
        <ul>
          <li>
            <a href="#">
              <FaHome /> Inicio
            </a>
          </li>
          <li>
            <a href="#">
              <TbCategoryFilled /> Series
            </a>
          </li>
          <li>
            <a href="#">
              <RiMovie2Line /> Películas
            </a>
          </li>
        </ul>
      </nav>

      {/* Elementos alineados a la derecha */}
      <nav className="nav_right">
        <ul>
          <li>
            <a href="#">
              <CiSearch />
            </a>
          </li>
          <li>
            <a href="#">
              <CiBoxList />
            </a>
          </li>
          <li>
            <a href="#">
              <FaUserCircle />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
