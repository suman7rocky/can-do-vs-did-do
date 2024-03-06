import { CheckBox, FlexBox, Label, Button } from "@ui5/webcomponents-react";

type CanDoSummaryHeaderProps = {
	title: string;
	setSodSection: (value: boolean) => void;
	setSensitiveSection: (value: boolean) => void;
	setAllSection: (value: boolean) => void;
	setRefetch: (value: (prev: boolean) => boolean) => void;
};

const CanDoSummaryHeader = ({
	title,
	setSodSection,
	setAllSection,
	setSensitiveSection,
	setRefetch,
}: CanDoSummaryHeaderProps) => {
	const handleClick = () => {
		setRefetch((prev) => !prev);
	};
	return (
		<div className="mb-6">
			<h3 className="text-xl font-bold pt-4 pl-6">{title}</h3>
			<FlexBox
				alignItems="Center"
				justifyContent="Center"
				className="gap-x-4"
				style={{ display: "flex", alignItems: "stretch" }}>
				{/* SOD Checkbox */}
				<div style={{ display: "flex", alignItems: "stretch" }}>
					<CheckBox onChange={(event) => setSodSection(event.target.checked)} />
					<Label
						className="text-xl"
						style={{ alignItems: "center" }}>
						Segregation of Duties
					</Label>
				</div>

				{/* Sensitive Access Checkbox */}
				<div style={{ display: "flex", alignItems: "stretch" }}>
					<CheckBox
						onChange={(event) => setSensitiveSection(event.target.checked)}
					/>
					<Label
						className="text-xl"
						style={{ alignItems: "center" }}>
						Sensitive Access
					</Label>
				</div>

				{/* All Checkbox */}
				<div style={{ display: "flex", alignItems: "stretch" }}>
					<CheckBox onChange={(event) => setAllSection(event.target.checked)} />
					<Label
						className="text-xl"
						style={{ alignItems: "center" }}>
						All
					</Label>
				</div>

				{/* Refresh Button */}
				<Button
					onClick={handleClick}
					style={{ alignItems: "center" }}
					icon="refresh"></Button>
			</FlexBox>
		</div>
	);
};

export default CanDoSummaryHeader;
