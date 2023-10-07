import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center ">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
