import { useState } from "react";
import { register } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { userRedirectActiveUser } from "../hooks/useRedirectActiveUser";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useUserContext;
  userRedirectActiveUser(user, "/dashboard");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentialUser = await register({ email, password });
      console.log(credentialUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Ingrese contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Registrar</button>
      </form>
    </>
  );
};

export default Register;
