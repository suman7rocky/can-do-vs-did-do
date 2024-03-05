import { BusyIndicator } from "@ui5/webcomponents-react";

const Loading = () => {
	return (
		<div className="absolute left-[50%] top-[50%] translate-[-50%, -50%] z-[99999999999999999]">
			<BusyIndicator active />
		</div>
	);
};

export default Loading;
