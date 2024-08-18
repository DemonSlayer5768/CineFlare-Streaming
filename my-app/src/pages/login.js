import React, { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { useRouter } from "next/router";
import "../styles/login.css"; // Asegúrate de tener estilos si es necesario

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false); // Nuevo estado para manejar la visibilidad del modal
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        console.log("Login successful", result);
        router.push("/Inicio");
      } else {
        console.error("Login failed", result.message);
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      {isLoading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      <h3>Comenzar</h3>
      <div className="login-container">
        <h5>Iniciar Sesión</h5>
        {showModal && (
          <div className="error-container">
            <p>
              <MdErrorOutline /> El usuario o la contraseña son incorrectos.
            </p>
          </div>
        )}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
