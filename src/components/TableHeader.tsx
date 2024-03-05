import { Button, CheckBox, FlexBox, Label } from "@ui5/webcomponents-react";

const TableHeader = ({ title }: { title: string }) => {
	return (
		<div className="mb-6">
			<h3 className="text-xl font-bold pt-4 pl-6">{title}</h3>
			<FlexBox
				alignItems="Center"
				justifyContent="Center"
				className="gap-x-4"
				style={{ display: "flex", alignItems: "stretch" }}>
				<div style={{ display: "flex", alignItems: "stretch" }}>
					<CheckBox />
					<Label
						className="text-xl"
						style={{ alignItems: "center" }}>
						Segregation Of Duties
					</Label>
				</div>

				<div style={{ display: "flex", alignItems: "stretch" }}>
					<CheckBox />
					<Label
						className="text-xl"
						style={{ alignItems: "center" }}>
						Sensitive Access
					</Label>
				</div>

				<div style={{ display: "flex", alignItems: "stretch" }}>
					<CheckBox />
					<Label
						className="text-xl"
						style={{ alignItems: "center" }}>
						All
					</Label>
				</div>
				<Button
					style={{ alignItems: "center" }}
					icon="refresh"></Button>
			</FlexBox>
		</div>
	);
};

export default TableHeader;
