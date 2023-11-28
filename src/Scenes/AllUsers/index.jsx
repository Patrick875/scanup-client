import { Link } from "react-router-dom";
import useFetchData from "../../Hooks/UseFetchData";

const AllUsers = () => {
	const { data, loading, error } = useFetchData("/users");
	console.log(data);
	return (
		<div className="p-2">
			<div className="flex justify-between my-2">
				<p className="text-center">Registered Users</p>
				<Link
					to="register"
					className="px-4 py-1 mx-4 my-1 text-sm text-white bg-sky-800">
					Register New{" "}
				</Link>
			</div>

			<div className="mt-2">
				{data ? (
					<div>
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
											Department
										</th>
										<th className="w-24 p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
											Role
										</th>
										<th className="w-24 p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
											Tel
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-100 ">
									{data.map((el, index) => (
										<tr key={crypto.randomUUID()}>
											<td className="p-3 text-sm whitespace-nowrap gray-700">
												<Link
													to="#"
													className="text-blue-500 font-bolf hover:underline"></Link>
												{index + 1}
											</td>
											<td className="p-3 text-sm uppercase whitespace-nowrap gray-700">
												{el.firstName + " " + el.lastName}
											</td>
											<td className="p-3 text-sm whitespace-nowrap gray-700">
												{el.nationalId}
											</td>
											<td className="p-3 text-sm whitespace-nowrap gray-700">
												{el.department}
											</td>
											<td className="p-3 text-sm whitespace-nowrap gray-700">
												{el.role}
											</td>
											<td className="p-3 text-sm whitespace-nowrap gray-700">
												{el.tel}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				) : (
					<p className="py-4 text-center">No registered users ! </p>
				)}
			</div>
		</div>
	);
};
export default AllUsers;
