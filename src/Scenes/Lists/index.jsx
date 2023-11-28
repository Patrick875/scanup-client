import { Outlet } from "react-router-dom";

function Lists() {
	return (
		<div className="p-2">
			<Outlet />
		</div>
	);
}

export default Lists;
