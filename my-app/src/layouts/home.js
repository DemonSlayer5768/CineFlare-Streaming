import React from "react";
import Link from "next/link";
import Price from "../Components/prices";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="container">
      <header>
        <img className="logo" src="../imgs_Home/logo.jpg"></img>
        <nav className="center">
          <ul>
            <li className="btn_register">
              <Link href="/register">Regristar</Link>
            </li>
            <li className="btn_inicio">
              <Link href="/login">Iniciar Sesión</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="body">
        <img className="fondo" alt="fondo" src="../imgs_Home/fondo.jpg" />
        <h3>CineFlare</h3>
        <h4> !MUCHO MAS QUE VER !</h4>
        {/* <img className="pantalla" src="../imgs_Home/pantalla.jpg"></img> */}
      </div>
      <h5 className="title_price">PRECIOS </h5>
      <Price />
    </div>
  );
};

export default Home;
