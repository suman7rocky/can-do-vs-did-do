import {
	List,
	ListMode,
	ListPropTypes,
	ResponsivePopover,
	ResponsivePopoverDomRef,
	StandardListItem,
} from "@ui5/webcomponents-react";
import { MutableRefObject } from "react";

const THEMES = [
	{ key: "sap_horizon", value: "Morning Horizon (Light)" },
	{ key: "sap_horizon_dark", value: "Evening Horizon (Dark)" },
	{ key: "sap_horizon_hcb", value: "Horizon High Contrast Black" },
	{ key: "sap_horizon_hcw", value: "Horizon High Contrast White" },
];

type ThemeSwitchPopoverProps = {
	currentTheme: string;
	handleThemeSwitch: ListPropTypes["onSelectionChange"];
	popoverRef: MutableRefObject<ResponsivePopoverDomRef | null>;
};

const ThemeSwitchPopover = ({
	currentTheme,
	handleThemeSwitch,
	popoverRef,
}: ThemeSwitchPopoverProps) => {
	return (
		<ResponsivePopover
			ref={popoverRef}
			className="popover">
			<List
				onSelectionChange={handleThemeSwitch}
				headerText="Switch Theme"
				mode={ListMode.SingleSelect}>
				{THEMES.map((theme) => (
					<StandardListItem
						key={theme.key}
						selected={currentTheme === theme.key}
						data-key={theme.key}>
						{theme.value}
					</StandardListItem>
				))}
			</List>
		</ResponsivePopover>
	);
};

export default ThemeSwitchPopover;
