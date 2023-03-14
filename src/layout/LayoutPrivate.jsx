import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutPrivate = () => {
  const { user } = useUserContext();

  return <>{user ? <Outlet></Outlet> : <Navigate to="/"></Navigate>}</>;
};

export default LayoutPrivate;
