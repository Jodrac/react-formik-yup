import { logOut } from "../config/firebase";
import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUserContext();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Dashboard (ruta protegida</h1>
      <h2>Bienvenido {user.name}</h2>
      <button onClick={handleLogOut}>LogOut</button>
    </>
  );
};

export default Dashboard;
