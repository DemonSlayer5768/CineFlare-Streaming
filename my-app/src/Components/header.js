import React from "react";
import { FaHome, FaList, FaUser, FaUserCircle } from "react-icons/fa"; // Importando los iconos
import { CiBoxList, CiSearch } from "react-icons/ci";
import { TbCategoryFilled } from "react-icons/tb";
import { RiMovie2Line } from "react-icons/ri";
import "./header.css"; // Importando los estilos

const Header = () => {
  return (
    <header>
      <nav>
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
              <RiMovie2Line /> Peliculas
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <li>
          <a href="#">
            {/* buscador */}
            <CiSearch />
          </a>
        </li>
        <li>
          <a href="#">
            {/* lista */}
            <CiBoxList />
          </a>
        </li>
        <li>
          <a href="#">
            {/* perfil */}
            <FaUserCircle />
          </a>
        </li>
      </nav>
    </header>
  );
};

export default Header;
