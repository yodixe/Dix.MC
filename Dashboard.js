// src/components/Dashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Importar Sidebar si se usa
import './Dashboard.css'; // Asegúrate de tener el archivo CSS correcto

const Dashboard = () => {
  const [serverStatus, setServerStatus] = useState('detenido');

  // URL base de tu Google Colab Notebook (Reemplaza 'URL_DE_TU_COLAB' con tu URL real)
  const COLAB_URL = 'https://colab.research.google.com/drive/1eb-dy-NCh8fhXgqH4a19zrMN4zFt4YBC?usp=sharing>';

  // IDs de las celdas en Google Colab para iniciar y detener el servidor
  const START_SERVER_CELL_ID = "<o2PpSW8u5fkL&line=9&uniqifier=1>";
  const STOP_SERVER_CELL_ID = "<o2PpSW8u5fkL&line=14&uniqifier=1>";

  // Función para iniciar el servidor
  const startServer = async () => {
    try {
      await fetch(`${COLAB_URL}/execute?cellId=${START_SERVER_CELL_ID}`, {
        method: 'POST',
      });
      setServerStatus('iniciado');
      alert('Servidor Iniciado');
    } catch (error) {
      console.error("Error al iniciar el servidor:", error);
      alert('Error al iniciar el servidor');
    }
  };

  // Función para detener el servidor
  const stopServer = async () => {
    try {
      await fetch(`${COLAB_URL}/execute?cellId=${STOP_SERVER_CELL_ID}`, {
        method: 'POST',
      });
      setServerStatus('detenido');
      alert('Servidor Detenido');
    } catch (error) {
      console.error("Error al detener el servidor:", error);
      alert('Error al detener el servidor');
    }
  };

  return (
    <div className="dashboard">
      <Sidebar /> {/* Sidebar renderizado si es necesario */}
      <div className="content">
        <h2>Tus Servidores</h2>
        <button onClick={startServer}>Iniciar Servidor</button>
        <button onClick={stopServer}>Detener Servidor</button>
        <p>Estado del servidor: {serverStatus}</p>
      </div>
    </div>
  );
};

export default Dashboard;
