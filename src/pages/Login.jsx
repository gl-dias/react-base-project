import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";
import LoginForms from "../components/login/loginForms"; 
import Base from "./Base";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redireciona após login bem-sucedido
    } catch (error) {
      alert(error.message); // Exibe erro caso falhe
    }
  };

  return (
    <Base>
      <LoginForms handleLogin={handleLogin} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
    </Base>
  );
};

export default Login;
