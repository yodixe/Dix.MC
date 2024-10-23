// src/components/Sidebar.js
import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/servidor">Servidor</Link>
      <Link to="/opciones">Opciones</Link>
      {/* Aquí puedes agregar los demás enlaces */}
    </div>
  );
};

export default Sidebar;
