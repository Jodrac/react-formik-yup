import { Button } from "@mui/material";
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
      <Button variant="contained" onClick={handleLogOut}>
        LogOut
      </Button>
    </>
  );
};

export default Dashboard;
