//jshint esversion:9
import { Link } from "react-router-dom";
import useFetchData from "../../Hooks/UseFetchData";
import instance from "../../API";
import { useState } from "react";
import { useQR, useUser } from "../../Context/UserContext";

function Dashboard() {
	const { user } = useUser();
	const { createQr, setShowQr } = useQR();
	const { data } = useFetchData("/attendance/list/current");
	const [qr, setQr] = useState(null);
	const [qrerror, setQrError] = useState(null);
	const [qrloading, setQrLoading] = useState(null);
	const getQr = async () => {
		try {
			const response = await instance.post("/attendance/qr", {
				userId: user.id,
			});
			if (response.data && response.data.data) {
				setQr(response.data.data);
				createQr(response.data.data);
				setShowQr(true);
			}
		} catch (error) {
			setQrError(error);
		} finally {
			setQrLoading(false);
		}
	};
	console.log(data);
	return (
		<div className="p-2 ">
			<div className="flex justify-between">
				<div className="flex gap-2">
					<p className="text-sm font-medium">Dashboard</p>
				</div>
				<button
					onClick={() => getQr()}
					className="flex items-center px-6 py-1 text-sm text-white bg-black">
					<span className="pe-1"> Generate Qr</span>
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
							d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
						/>
					</svg>
				</button>
			</div>

			<div className="mt-2">
				{data ? (
					<div>
						<p className="py-3 font-medium">Today</p>
						<div className="overflow-auto rounded-lg shadow-md ">
							<table className="w-full">
								<thead className="border-b-2 border-gray-200 bg-gray-50">
									<tr>
										<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
											No.
										</th>
										<th className="w-32 p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
											Names
										</th>
										<th className="w-32 p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
											Id
										</th>
										<th className="w-24 p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
											Time
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-100 ">
									{data.Attendances.map((el, index) => (
										<tr key={crypto.randomUUID()}>
											<td className="p-3 text-sm whitespace-nowrap gray-700">
												<Link
													to="#"
													className="text-blue-500 font-bolf hover:underline"></Link>
												{index + 1}
											</td>
											<td className="p-3 text-sm whitespace-nowrap gray-700">
												{el.User.firstName + " " + el.User.lastName}
											</td>
											<td className="p-3 text-sm whitespace-nowrap gray-700">
												{el.User.nationalId}
											</td>
											<td className="p-3 text-sm whitespace-nowrap gray-700">
												{new Date(el.time).toLocaleTimeString()}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				) : (
					<p className="py-4 text-center">No attendance registered today ! </p>
				)}
			</div>
		</div>
	);
}

export default Dashboard;
