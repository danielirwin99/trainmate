import { useAppContext } from "../context/appContext";
import Loading from "../components/Loading";

// Children --> Whatever we wrap this .js file around --> In this case SharedLayout.jsx
const ProtectedRoute = ({ children }) => {
  // Pulling through the reducer functionality
  const { user, userLoading } = useAppContext();

  if (userLoading) return <Loading />;

  // Returns the values inside the state to use elsewhere
  return children;
};

export default ProtectedRoute;
