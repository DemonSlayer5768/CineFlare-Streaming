import { useRouter } from "next/router";
import React, { useState } from "react";
import pool from "../../../db/db"; // Asegúrate de que la ruta sea correcta
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const result = await pool.query("SELECT * FROM anime WHERE url_page = ?", [
      id,
    ]);
    const [rows] = result;
    return { props: { anime: rows } };
  } catch (err) {
    console.error("Error en la consulta:", err);
    return { props: { anime: [] } };
  }
};

const TestPage = () => {
  return (
    <div className="p-10 bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">¡Tailwind está funcionando!</h1>
      <p className="mt-4 text-lg">
        Si ves este texto con estilos aplicados, Tailwind está funcionando.
      </p>
    </div>
  );
};

export default TestPage;
