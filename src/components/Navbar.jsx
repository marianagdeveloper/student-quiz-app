import {Link} from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <header className="bg-blue-900 py-5 flex justify-center">
      <Link to="/">
        <h1 className="text-white text-2xl font-bold hover:scale-110 transition-all duration-500">
          Estudiante - Aplicación de examenes
        </h1>
      </Link>
    </header>
  );
};
