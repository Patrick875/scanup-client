//jshint esversion:9
import React from "react";
import { Link, useLocation } from "react-router-dom";
import useFetchData from "../../Hooks/UseFetchData";
import BackButton from "../../Shared/BackButton";

function List() {
	const { pathname } = useLocation();
	const pathstr = pathname.split("/");
	const listId = pathstr[pathstr.length - 1];
	const { data } = useFetchData(`/attendance/list/${listId}`);

	return (
		<React.Fragment>
			<BackButton />
			<p className="font-medium">
				Attendance list of {data ? data.date : null}
			</p>
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
											Time
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-100 ">
									{data.Attendances
										? data.Attendances.map((el, index) => (
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
										  ))
										: null}
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

export default List;
