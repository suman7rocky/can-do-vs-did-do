import {
	getTheme,
	setTheme,
} from "@ui5/webcomponents-base/dist/config/Theme.js";
import paletteIcon from "@ui5/webcomponents-icons/dist/palette.js";
import {
	Avatar,
	Button,
	ListPropTypes,
	ResponsivePopoverDomRef,
	ShellBar,
	ShellBarItem,
	ShellBarItemPropTypes,
} from "@ui5/webcomponents-react";
import { useEffect, useRef, useState } from "react";
import ThemeSwitchPopover from "./ThemeSwitchPopover";
import { useSidebar } from "../hooks/useSidebar";

import { ThemingParameters, spacing } from "@ui5/webcomponents-react-base";
import "../navbar.css";
import { deleteCookie } from "../lib/deleteCookie";

type NavbarProps = {
	companyName: string;
	companyLogo: string;
	productName: string;
	isNotifiction?: boolean;
	notificationCount?: string;
	userName: string;
	userImage: string;
	themeSwitch: (theme: string) => void;
	setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const Navbar = ({
	companyLogo,
	companyName,
	productName,
	isNotifiction,
	notificationCount,
	userName,
	userImage,
	setIsLoggedIn,
	themeSwitch,
}: NavbarProps) => {
	const [currentTheme, setCurrentTheme] = useState(getTheme);
	const popoverRef = useRef<ResponsivePopoverDomRef | null>(null);
	const { setSidebarCollapsed } = useSidebar();

	const handleThemeSwitch: ListPropTypes["onSelectionChange"] = (e) => {
		const { targetItem } = e.detail;
		const selectedTheme: string = targetItem.dataset.key!;
		setTheme(targetItem.dataset.key!);
		setCurrentTheme(targetItem.dataset.key!);
		localStorage.setItem("Theme", selectedTheme);
		if (selectedTheme && themeSwitch) {
			themeSwitch(selectedTheme);
		}
	};
	const handleThemeSwitchItemClick: ShellBarItemPropTypes["onClick"] = (e) => {
		popoverRef.current?.showAt(e.detail.targetRef);
	};

	const handleNavMenuButtonclick = () => {
		setSidebarCollapsed((isCollapseSidebar) => !isCollapseSidebar);
	};

	const handleLogout = () => {
		const user = localStorage.getItem("userdetails");
		if (user) {
			localStorage.removeItem("userdetails");
			deleteCookie("authToken");
			setIsLoggedIn(false);
			window.location.reload();
		}
	};

	useEffect(() => {
		const storedTheme: string | null = localStorage.getItem("Theme");
		if (storedTheme) {
			setCurrentTheme(storedTheme);
			setTheme(storedTheme);
		}
	}, []);
	return (
		<>
			<ShellBar
				style={{
					borderColor: ThemingParameters.sapShell_BorderColor,
					...spacing.sapUiTinyMargin,
				}}
				className="shellbar_custom"
				logo={
					<img
						src={companyLogo}
						alt={`${companyName} Logo`}
					/>
				}
				primaryTitle={productName}
				profile={
					<Avatar>
						<img
							src={userImage}
							alt={userName}
						/>
					</Avatar>
				}
				showNotifications={isNotifiction}
				startButton={
					<Button
						style={{
							position: "absolute",
							left: "0.6rem",
						}}
						className="mr-4"
						design="Emphasized"
						icon="menu2"
						onClick={handleNavMenuButtonclick}
						slot="startButton"
					/>
				}
				notificationsCount={notificationCount}>
				<ShellBarItem
					icon={paletteIcon}
					text="Change Theme"
					onClick={handleThemeSwitchItemClick}
				/>

				<ShellBarItem
					icon="log"
					text="Logout"
					onClick={handleLogout}
				/>
			</ShellBar>

			<ThemeSwitchPopover
				currentTheme={currentTheme}
				popoverRef={popoverRef}
				handleThemeSwitch={handleThemeSwitch}
			/>
		</>
	);
};

export default Navbar;
