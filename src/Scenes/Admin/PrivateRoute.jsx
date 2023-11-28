//jshint esversion:9
import { Navigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

const PrivateRoute = ({ element, allowedRoles }) => {
	const { user } = useUser();

	// Redirect to login if user is not authenticated
	if (!user) {
		return <Navigate to="/" />;
	}

	// Redirect if user does not have the required role
	if (
		allowedRoles &&
		allowedRoles.length > 0 &&
		!allowedRoles.includes(user.role)
	) {
		return <Navigate to="/" />;
	}

	// Render the component if all conditions are met
	return element;
};
export default PrivateRoute;
