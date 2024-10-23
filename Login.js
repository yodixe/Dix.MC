// src/components/Login.js
import React from 'react';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      history.push("/dashboard");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="login-page">
      <button onClick={loginWithGoogle}>Iniciar Sesión con Google</button>
    </div>
  );
};

export default Login;
