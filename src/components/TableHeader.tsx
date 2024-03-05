import { CheckBox, FlexBox, Label, Button } from "@ui5/webcomponents-react";

type TableHeaderProps = {
	title: string;
	setSod: (value: boolean) => void;
	setSensitive: (value: boolean) => void;
	setAll: (value: boolean) => void;
	setRefresh: (value: (prev: boolean) => boolean) => void;
};

const TableHeader = ({
	title,
	setAll,
	setRefresh,
	setSensitive,
	setSod,
}: TableHeaderProps) => {
	const handleClick = () => {
		setRefresh((prev) => !prev);
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
					<CheckBox onChange={(event) => setSod(event.target.checked)} />
					<Label
						className="text-xl"
						style={{ alignItems: "center" }}>
						Segregation Of Duties
					</Label>
				</div>

				{/* Sensitive Access Checkbox */}
				<div style={{ display: "flex", alignItems: "stretch" }}>
					<CheckBox onChange={(event) => setSensitive(event.target.checked)} />
					<Label
						className="text-xl"
						style={{ alignItems: "center" }}>
						Sensitive Access
					</Label>
				</div>

				{/* All Checkbox */}
				<div style={{ display: "flex", alignItems: "stretch" }}>
					<CheckBox onChange={(event) => setAll(event.target.checked)} />
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

export default TableHeader;
