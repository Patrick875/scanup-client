//jshint esversion:9
import QrReader from "react-qr-reader";
import { useState } from "react";
import { useUser } from "../../Context/UserContext";
import instance from "../../API";
import useMediaQuery from "../../Hooks/useMediaQuery";

function Scan() {
	const { user, logoutUser } = useUser();
	const [enableWebCam, setEnableWebCam] = useState(false);
	const [scanResultWebcam, setScanResultWebcam] = useState("");
	const isAboveTabletSize = useMediaQuery("(min-width:960px)");
	const handleErrorWebCam = (error) => {
		console.log(error);
	};
	const handleScanWebCam = async (result) => {
		if (result) {
			setScanResultWebcam(result);
			setEnableWebCam(false);
			await instance
				.post(result, { userId: user.id })
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	return (
		<div className="w-full mx-auto ">
			<div className="flex w-full">
				<div className="w-full">
					<div className="flex justify-center ">
						<div>
							<h3 className="my-4 ">Place the QR code inside red square </h3>
							<div className="flex justify-center">
								<button
									className="px-12 py-1 text-white bg-teal-800"
									onClick={() => setEnableWebCam(!enableWebCam)}>
									{!enableWebCam ? "Scan " : "Disable Camera"}
								</button>
							</div>
						</div>
					</div>
					<div className="w-5/6 mx-auto my-2">
						<div className="flex justify-center">
							{enableWebCam && (
								<QrReader
									delay={300}
									style={{ width: `${isAboveTabletSize ? "380px" : "80% "}` }}
									onError={handleErrorWebCam}
									onScan={handleScanWebCam}
								/>
							)}
						</div>
					</div>

					<h3 className="text-center">
						Scanned by WebCam Code : {scanResultWebcam}
					</h3>
				</div>
			</div>
			<div className="flex justify-center">
				<div className="p-6 my-2 bg-slate-300">
					<p className="py-2 font-bold text-center">Status:Loged In </p>
					<p>Firstname: {user.firstName}</p>
					<p>Lastname: {user.lastName}</p>
					<p>National Id: {user.nationalId}</p>
					<p>Tel: {user.tel}</p>
				</div>
			</div>
			<div className="flex justify-center">
				<button
					className="px-12 py-1 text-center text-white rounded shadow-lg bg-gradient-to-t from-pink-800 to-pink-900 decoration-none my-7"
					onClick={() => logoutUser()}>
					Logout
				</button>
			</div>
		</div>
	);
}

export default Scan;
