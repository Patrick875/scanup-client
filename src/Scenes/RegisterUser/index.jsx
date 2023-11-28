import { useForm } from "react-hook-form";
import instance from "../../API";
import BackButton from "../../Shared/BackButton";
import { useState } from "react";

function RegisterUser() {
	const {
		register,
		handleSubmit,
		reset,
		trigger,
		formState: { errors },
	} = useForm();
	const [loading, setLoading] = useState(false);
	const registerUser = async (data) => {
		setLoading(true);
		const isValid = await trigger();
		if (isValid) {
			await instance
				.post("/register", data)
				.then((res) => {
					console.log(res);
					reset();
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	};
	return (
		<div>
			<BackButton />
			<p className="font-medium text-center">Register User</p>
			<div className="w-5/6 mx-auto mt-2">
				<div className="flex justify-center w-full ">
					<form
						className="p-5 shadow-md bg-slate-50 basis-2/4"
						onSubmit={handleSubmit(registerUser)}>
						<div>
							<label htmlFor="id" className="block my-1 text-sm text-gray-700 ">
								FirstName
							</label>
							<input
								type="text"
								className="w-full px-3 py-0 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								id="firstName"
								{...register("firstName", { required: true })}
							/>
							{errors && errors.firstName && (
								<p className="text-xs text-pink-700">This field is required</p>
							)}
						</div>
						<div>
							<label htmlFor="id" className="block my-1 text-sm text-gray-700 ">
								LastName
							</label>
							<input
								type="text"
								className="w-full px-3 py-0 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								id="LastName"
								{...register("lastName", { required: true })}
							/>
							{errors && errors.lastName && (
								<p className="text-xs text-pink-700">This field is required</p>
							)}
						</div>
						<div>
							<label
								htmlFor="nationalId"
								className="block my-1 text-xs text-gray-700 ">
								National Id
							</label>
							<input
								type="text"
								className="w-full px-3 py-0 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								id="nationalId"
								{...register("nationalId", {
									required: true,
									maxLength: 16,
									minLength: 16,
								})}
							/>

							{errors &&
								errors.nationalId &&
								errors.nationalId.type === "required" && (
									<p className="text-xs text-pink-700">
										This field is required
									</p>
								)}
							{errors &&
								errors.nationalId &&
								errors.nationalId.type === "maxLength" && (
									<p className="text-xs text-pink-700">
										Id number must be 16 digits
									</p>
								)}
							{errors &&
								errors.nationalId &&
								errors.nationalId.type === "minLength" && (
									<p className="text-xs text-pink-700">
										Id number must be 16 digits
									</p>
								)}
						</div>
						<div>
							<label
								htmlFor="tel"
								className="block my-1 text-sm text-gray-700 ">
								Tel
							</label>
							<input
								type="text"
								className="w-full px-3 py-0 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								id="tel"
								{...register("tel")}
							/>
						</div>
						<div>
							<label htmlFor="id" className="block my-1 text-sm text-gray-700 ">
								Email
							</label>
							<input
								type="email"
								className="w-full px-3 py-0 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								id="email"
								{...register("email", { required: true })}
							/>
							{errors && errors.email && (
								<p className="text-xs text-pink-700">This field is required</p>
							)}
						</div>
						<div>
							<label htmlFor="id" className="block my-1 text-sm text-gray-700 ">
								Department
							</label>
							<input
								type="text"
								className="w-full px-3 py-0 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
								id="department"
								{...register("department")}
							/>
						</div>

						<div className="flex justify-center mt-4">
							<button
								disabled={loading}
								className={`${
									loading ? "bg-sky-700" : "bg-sky-900"
								} px-6 py-1 text-sm text-white rounded-sm bg-sky-900`}>
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RegisterUser;
