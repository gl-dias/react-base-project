import React from "react";
import { LoginContainer, LoginForm } from "./style"; // Importe os estilos corretamente

const LoginForms = ({ handleLogin, email, setEmail, password, setPassword }) => {
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginForms;
