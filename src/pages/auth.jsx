import { Navigate, Outlet } from "react-router-dom";
const auth = () => {
  const user = "null";
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default auth;
