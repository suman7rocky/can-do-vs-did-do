import { useNavigate } from "react-router-dom";
import {
	SideNavigation,
	SideNavigationItem,
	SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import "@ui5/webcomponents-react/dist/Assets.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { useSidebar } from "../hooks/useSidebar";

import { ThemingParameters, spacing } from "@ui5/webcomponents-react-base";

type SubItemProps = {
	icon: string;
	text: string;
	path: string;
};

type ItemProps = {
	text: string;
	icon: string;
	path: string;
	subItems?: SubItemProps[];
};

type SideNavbarProps = {
	items: ItemProps[];
};

const SideNavbar = ({ items }: SideNavbarProps) => {
	const navigate = useNavigate();
	const { isSidebarCollapsed } = useSidebar();

	const handleNavigation = (location: string) => {
		navigate(location);
	};

	return (
		<SideNavigation
			className="h-[93.5vh] mb-[0.3rem]"
			style={{
				...spacing.sapUiTinyMarginBeginEnd,
				borderRadius: ThemingParameters.sapButton_BorderCornerRadius,
			}}
			collapsed={isSidebarCollapsed}>
			{items.map((item, index) => (
				<SideNavigationItem
					key={index}
					icon={item.icon}
					text={item.text}
					selected={index === 0}
					onClick={() => handleNavigation(item.path)}>
					{item.subItems &&
						item.subItems.map((subItem, subIndex) => (
							<SideNavigationSubItem
								key={subIndex}
								icon={subItem.icon}
								text={subItem.text}
								onClick={(e) => {
									e.stopPropagation();
									handleNavigation(item.path + subItem.path);
								}}
							/>
						))}
				</SideNavigationItem>
			))}
		</SideNavigation>
	);
};

export default SideNavbar;
