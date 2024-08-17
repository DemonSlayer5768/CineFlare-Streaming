import React from "react";
import Link from "next/link";

import "../styles/headerHome.css";

const Home = () => {
  return (
    <header>
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
  );
};

export default Home;
