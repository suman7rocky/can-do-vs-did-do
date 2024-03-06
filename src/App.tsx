import { Suspense, useEffect, useState } from "react";
import { FlexBox } from "@ui5/webcomponents-react";
import companyLogo from "./assets/images/irm.png";
import userImage from "./assets/images/userImages/user1.jpg";
import Navbar from "./components/Navbar";
import SideNavbar from "./components/SideNavbar";
import Dashboard from "./pages/dashboard";
import routes from "./lib/data";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import SignIn from "./pages/login";

function App() {
	const [, setTheme] = useState("sap_horizon");
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const user = localStorage.getItem("userdetails");
		if (user) {
			setIsLoggedIn(true);
		}
	}, []);

	return (
		<>
			<div
				className={`overflow-hidden`}
				style={{
					backgroundColor: `color-mix(in srgb, black 4%, var(--sapBackgroundColor))`,
					gridTemplateRows: "auto 1fr",
					gridTemplateColumns: "auto 1fr",
				}}>
				{!isLoggedIn ? (
					<SignIn setIsLoggedIn={setIsLoggedIn} />
				) : (
					<Suspense fallback={<Loading />}>
						<Navbar
							setIsLoggedIn={setIsLoggedIn}
							companyName="TRP Global"
							productName="iRM"
							isNotifiction={true}
							notificationCount="10"
							companyLogo={companyLogo}
							userImage={userImage}
							userName="John Doe"
							themeSwitch={setTheme}
						/>
						<FlexBox
							style={{
								height: "92.5vh",
							}}>
							<SideNavbar items={routes} />

							<Suspense fallback={<Loading />}>
								<Routes>
									<Route
										path="/dashboard"
										element={<Dashboard />}
									/>

									<Route
										path="/"
										element={<Dashboard />}
									/>
								</Routes>
							</Suspense>
						</FlexBox>
					</Suspense>
				)}
			</div>
		</>
	);
}

export default App;
