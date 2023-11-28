import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetchData from "../../Hooks/UseFetchData";
import { sortDates } from "../../Shared/utilFunctions";

function AllLists() {
	const { data } = useFetchData("/attendance/lists");
	const navigate = useNavigate();
	const handleOnClick = (url) => {
		navigate(url);
	};
	return (
		<React.Fragment>
			<p className="text-center">Attendance Lists</p>
			<div className="mt-2">
				{data ? (
					<div>
						<div className="overflow-auto rounded-lg shadow-md ">
							<table className="w-full">
								<thead className="border-b-2 border-gray-200 bg-gray-50">
									<tr>
										<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
											No
										</th>
										<th className="w-32 p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
											Date
										</th>
										<th className="w-32 p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
											Number
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-100 ">
									{sortDates(data).map((el, index) => (
										<tr
											key={crypto.randomUUID()}
											onClick={() => handleOnClick(`${el.id}`)}>
											<td className="p-3 text-sm cursor-pointer whitespace-nowrap gray-700">
												<Link
													to="#"
													className="text-blue-500 font-bolf hover:underline"></Link>
												{index + 1}
											</td>
											<td className="p-3 text-sm uppercase whitespace-nowrap gray-700">
												{new Date(el.date).toLocaleDateString()}
											</td>
											<td className="p-3 text-sm whitespace-nowrap gray-700">
												{el.Attendances.length}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				) : (
					<p className="py-4 text-center">No attendance list registered ! </p>
				)}
			</div>
		</React.Fragment>
	);
}

export default AllLists;
