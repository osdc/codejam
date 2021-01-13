import { Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser !== null ? children : <Redirect to="/signup" />;
}

export default ProtectedRoute;
