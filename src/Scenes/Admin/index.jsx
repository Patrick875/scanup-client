//jshint esversion:9
import React, { useState } from "react";
import Logo from "../../assets/logo-scan.svg";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useQR, useUser } from "../../Context/UserContext";

const SideBarMenu = ({ showside, setShowSide }) => {
	const { pathname } = useLocation();
	const navLinkStyle = ({ isActive }) => {
		return {
			background: isActive ? "#fafafa " : "",
			color: isActive ? "#111111" : "#fafafa",
			borderRadius: isActive ? "0.125rem " : "",
		};
	};
	return (
		<div
			className={`${
				!showside ? "hidden" : "absolute"
			} md:block w-full md:w-1/5 min-h-screen px-0 p-6 bg-teal-950 basis `}>
			<div className="flex justify-between align-top">
				<div className="flex justify-center my-3 text-white basis-5/6">
					<img alt="random-logo" className="block w-20 h-20" src={Logo} />
				</div>
				<div className="md:hidden basis-1/6" onClick={() => setShowSide(false)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6 text-white">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>
			</div>

			<div className="my-3">
				<ul>
					<li>
						<NavLink
							style={
								pathname === "/admin" ? navLinkStyle : { color: "#fafafa" }
							}
							className="flex items-center p-2 "
							to="">
							{({ isActive }) => (
								<React.Fragment>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className={`${
											isActive && pathname === "/admin"
												? "text-gray-900"
												: "text-white"
										} w-5 h-5`}>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
										/>
									</svg>
									<span className="text-sm ps-2">Attendance</span>
								</React.Fragment>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink
							style={navLinkStyle}
							className="flex items-center p-2 "
							to="users">
							{({ isActive }) => (
								<React.Fragment>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className={`${
											isActive ? "text-gray-900" : "text-white"
										} w-5 h-5 `}>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
										/>
									</svg>
									<span className="text-sm ps-2">Users</span>
								</React.Fragment>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink
							className="flex items-center p-2 "
							style={navLinkStyle}
							to="history">
							{({ isActive }) => (
								<React.Fragment>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className={`${
											isActive ? "text-gray-900" : "text-white"
										} w-5 h-5`}>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<span className="text-sm ps-2">History</span>
								</React.Fragment>
							)}
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

const TopBar = (props) => {
	const { showside, setShowSide } = props;
	const { logoutUser, user } = useUser();
	return (
		<div className="flex items-center justify-between px-0 py-4 bg-white md:p-4 md:justify-end align-content-center">
			<div className="flex items-center justify-between w-full px-2 md:justify-end md:basis-1/2">
				<button
					onClick={() => setShowSide(!showside)}
					className="p-2 shadow-xl md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-10 h-10">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
				<div className="flex gap-4 item-center">
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="block w-6 h-6 ">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
							/>
						</svg>

						<p className="px-2 text-sm font-medium">
							{user.firstName + "  " + user.lastName}
						</p>
					</div>
					<button
						className="flex px-4 py-1 rounded-full bg-slate-900"
						onClick={() => logoutUser()}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-5 h-5 text-white">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
							/>
						</svg>
						<span className="px-1 text-sm text-white align-middle">Logout</span>
					</button>
				</div>
			</div>
		</div>
	);
};

function Admin() {
	const { qr, setShowQr, showQr } = useQR();
	const [showside, setShowSide] = useState(false);
	const handleDownload = () => {
		const img = document.getElementById("qrImage");
		const link = document.createElement("a");
		link.href = img.src;
		link.download = "qr-code.png";
		link.click();
	};

	return (
		<div
			className="relative flex w-full bg-blue-50"
			onClick={() => setShowQr(false)}>
			{qr && showQr ? (
				<div
					className={`${
						showQr ? "block" : "hidden"
					} absolute right-0 left-0 top-10 m-auto  w-5/6 z-2000 bg-blue-100 shadow-lg p-8 `}>
					<div className="w-full">
						<p className="py-2 text-center ">Generated Qr</p>
						<div className="flex justify-center w-full ">
							<img
								alt="generated QR code"
								className="block w-2/5"
								src={qr.qr}
								id="qrImage"
							/>
						</div>
						<div className="flex justify-center mt-2">
							<button
								className="px-6 py-1 text-white bg-teal-700"
								onClick={handleDownload}>
								Download QR Code
							</button>
						</div>
					</div>
				</div>
			) : null}

			<SideBarMenu setShowSide={setShowSide} showside={showside} />
			<div className="w-full pt-0 mt-0 md:basis-4/5">
				<TopBar setShowSide={setShowSide} showside={showside} />

				<Outlet />
			</div>
		</div>
	);
}

export default Admin;
