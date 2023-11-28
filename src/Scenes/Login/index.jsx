//jshint esversion:9
import { useForm } from "react-hook-form";
import instance from "../../API";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import { useEffect, useState } from "react";

const Login = () => {
	const { register, handleSubmit } = useForm();
	const [error, setError] = useState(false);
	const [message, setMessage] = useState(null);
	const navigateToDashboard = (user) => {
		if (user && user.role !== "admin") {
			navigate("/scan");
		}
		if (user && user.role === "admin") {
			navigate("/admin");
		}
	};
	const { loginUser, user } = useUser();
	const navigate = useNavigate();
	const login = async (data) => {
		await instance
			.post("/login", { ...data })
			.then((res) => {
				loginUser(res.data.user);
				navigateToDashboard(res.data.user);
			})
			.catch((err) => {
				console.log(Object.keys(err.response));
				setError(true);
				setMessage(err.response.data.message);
			});
	};
	useEffect(() => {
		navigateToDashboard(user);
	}, []);

	return (
		<div className="max-h-screen mx-auto ">
			<div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
				<div className="md:w-[30%] w-[80%] shadow-lg  rounded-lg bg-slate-50">
					<h5 className="mt-4 text-lg font-bold text-center uppercase">
						Login
					</h5>
					<form onSubmit={handleSubmit(login)} className="px-8 pt-2 mx-2 p-9">
						<div>
							<label
								htmlFor="id"
								className="block my-4 text-sm font-medium text-gray-700 ">
								Email
							</label>
							<input
								type="email"
								className="w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								id="email"
								{...register("email")}
							/>
						</div>
						<div className="">
							<label
								htmlFor="password"
								className="block my-4 text-sm font-medium text-gray-700 ">
								Password
							</label>
							<input
								type="password"
								className="w-full px-3 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								id="password"
								{...register("password")}
							/>
						</div>
						<button
							type="submit"
							className="w-full px-3 py-2 font-bold text-center text-white rounded-lg shadow-lg bg-gradient-to-t from-teal-800 to-teal-900 decoration-none my-7">
							Login
						</button>
						<Link className="block text-xs text-center underline text-sky-700 ">
							Reset Password
						</Link>
					</form>
					{error && (
						<p className="flex items-center justify-center pb-4 ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-5 h-5 text-pink-700">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
								/>
							</svg>

							<span className="text-sm text-pink-700 ps-4">{message}</span>
						</p>
					)}
				</div>

				<p className="py-4 text-xs">
					Developed by SANTECH ltd &copy; {new Date().getFullYear()}
				</p>
			</div>
		</div>
	);
};

export default Login;
