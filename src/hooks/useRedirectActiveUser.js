import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const userRedirectActiveUser = (user, path) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(path);
  }, [user]);
};
