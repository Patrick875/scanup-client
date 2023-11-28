import { Outlet } from "react-router-dom";

function Users() {
	return (
		<div className="p-2">
			<Outlet />
		</div>
	);
}

export default Users;
