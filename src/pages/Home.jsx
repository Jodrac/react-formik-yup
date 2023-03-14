import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Home = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser({
      name: "Sergio",
      email: "sergio@test.com",
    });
    navigate("/dashboard");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Home;
