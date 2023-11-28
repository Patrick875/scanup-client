//jshint esversion:9
import { Routes, Route } from "react-router-dom";
import Login from "./Scenes/Login";
import ResetPassword from "./Scenes/ResetPassword";
import Admin from "./Scenes/Admin";
import Dashboard from "./Scenes/Dashboard";
import Lists from "./Scenes/Lists";
import AllUsers from "./Scenes/AllUsers";
import Users from "./Scenes/AllUsers/Users";
import PrivateRoute from "./Scenes/Admin/PrivateRoute";
import Scan from "./Scenes/Scan";
import { QRProvider } from "./Context/UserContext";
import RegisterUser from "./Scenes/RegisterUser";
import AllLists from "./Scenes/Lists/AllLists";
import List from "./Scenes/Lists/List";

function App() {
	return (
		<div className="w-full">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/scan"
					element={<PrivateRoute element={<Scan />} allowedRoles={["user"]} />}
				/>
				<Route path="/resetpassword" element={<ResetPassword />} />
				<Route
					path="/admin"
					element={
						<PrivateRoute
							element={
								<QRProvider>
									<Admin />
								</QRProvider>
							}
							allowedRoles={["admin"]}
						/>
					}>
					<Route index element={<Dashboard />} />
					<Route path="users" element={<Users />}>
						<Route index element={<AllUsers />} />
						<Route path="register" element={<RegisterUser />} />
					</Route>
					<Route path="history" element={<Lists />}>
						<Route index element={<AllLists />} />
						<Route path=":id" element={<List />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
